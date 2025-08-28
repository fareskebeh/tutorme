import { createContext } from "react";

type Theme = {
    theme : "light" | "dark"
}

export const themeContext = createContext<Theme | undefined>(undefined)