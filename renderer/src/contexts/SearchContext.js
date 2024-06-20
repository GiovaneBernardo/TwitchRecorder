"use client";
import React, { createContext, useState } from "react";

export const SearchContext = createContext({
  searchInput: "",
  setSearchInput: () => {},
  searchResults: "",
  setSearchResults: () => {},
});

export const SearchProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState("");

  return (
    <SearchContext.Provider
      value={{ searchInput, setSearchInput, searchResults, setSearchResults }}
    >
      {children}
    </SearchContext.Provider>
  );
};
