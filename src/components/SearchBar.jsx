"use client";
import { useContext, useState } from "react";
import { SearchContext, SearchProvider } from "../contexts/SearchContext";

export default function SearchBar() {
  const search = useContext(SearchContext);

  return (
    <SearchProvider>
      <div className="w-[33%] text-center">
          <input
            className="rounded-2xl ml-auto text-gray-400 bg-gray-900 hover:bg-gray-850 h-10 min-w-80 px-5 "
            value={search.searchInput}
            onChange={(e) => {
              search.setSearchInput(e.target.value);
            }}
          ></input>
      </div>
    </SearchProvider>
  );
}
