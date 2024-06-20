'use client'
import React from "react";
import { useContext, useState } from "react";
export const SearchResultsContext = React.createContext({
    searchResults: '',
    setSearchResults: () => {}
});

export const SearchResultsProvider = ({children})=>{
    const [searchResults, setSearchResults] = useState("");
    return(
        <SearchResultsContext.Provider value={{searchResults, setSearchResults}}>{children}</SearchResultsContext.Provider>
    )
}
