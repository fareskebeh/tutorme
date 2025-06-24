import React,{createContext} from "react"

type User = {
    username : string;
    pfp: string;
}

type authContextType = {
    user: User |null;
    setUser: React.Dispatch<React.SetStateAction<User|null>>;
}

export const authContext = createContext<authContextType | undefined>(undefined)