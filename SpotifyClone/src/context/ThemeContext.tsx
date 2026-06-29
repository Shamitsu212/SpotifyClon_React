import { createContext, useState, type ReactNode, type SetStateAction } from "react";
import type React from "react";

interface ThemeContext {
    theme: string,
    setTheme: React.Dispatch<SetStateAction<string>>
}

const ThemeContext = createContext<ThemeContext | null>(null)

interface ThemeProvider {
    children: ReactNode
}

export function ThemeProvider({children}:ThemeProvider){

    const [theme, setTheme] = useState<string>("night")

    return(

        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
        
    )
}