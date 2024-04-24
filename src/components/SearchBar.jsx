"use client";
import { useContext, useState } from "react";
import { SearchContext, SearchProvider } from "../contexts/SearchContext";

export default function SearchBar() {
  const search = useContext(SearchContext);

  return (
    <SearchProvider>
      <div>
        <input
          value={search.searchInput}
          onChange={(e)=>{search.setSearchInput(e.target.value)}}
        ></input>
      </div>
    </SearchProvider>
  );
}
