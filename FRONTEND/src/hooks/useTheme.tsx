import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import type { ReactNode } from "react";

interface ThemeContext {
  theme: "light" | "dark" | null;
  changeTheme: () => void;
}

const ThemeContext = createContext<ThemeContext>({
  theme: null,
  changeTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">();

  useEffect(() => {
    if(theme){
    localStorage.setItem("theme", theme);
    }
  }, [theme]);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const darkSys = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if(!stored) {
        setTheme(darkSys ? "dark": "light")

    }
    if(stored==="light" || stored==="dark") {
        setTheme(stored)
    }
    
  }, []);

  

  const changeTheme = () => setTheme((p) => (p === "light" ? "dark" : "light"));

  if (theme)
    return (
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        {children}
      </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);