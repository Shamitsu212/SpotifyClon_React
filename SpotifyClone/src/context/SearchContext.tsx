import { createContext, useState, type ReactNode, type SetStateAction } from "react";
import type React from "react";

interface SearchContext {
    search: string,
    setSearch: React.Dispatch<SetStateAction<string>>
}

export const SearchContext = createContext<SearchContext | null>(null)

interface SearchProvider {
    children: ReactNode
}

export function SearchProvider({children}:SearchProvider){

    const [search, setSearch] = useState<string>("")

    return(

        <SearchContext.Provider value={{search, setSearch}}>
            {children}
        </SearchContext.Provider>
        
    )
}