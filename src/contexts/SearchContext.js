'use client'
import React from "react";
import { useContext, useState } from "react";
export const SearchContext = React.createContext({
    searchInput: '',
    setSearchInput: () => {}
});

export const SearchProvider = ({children})=>{
    const [searchInput, setSearchInput] = useState("");
    return(
        <SearchContext.Provider value={{searchInput, setSearchInput}}>{children}</SearchContext.Provider>
    )
}
