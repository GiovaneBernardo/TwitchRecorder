"use client";
import { useContext, useState } from "react";
import { useRouter } from 'next/navigation'
import { SearchContext, SearchProvider } from "../contexts/SearchContext";
import { getSearchResults } from "../services/getSearchResults";

export default function SearchBar() {
  const router = useRouter();
  const { searchInput, setSearchInput, searchResults, setSearchResults } = useContext(SearchContext);

  return (
    <SearchProvider>
      <div className="w-[33%] text-center">
        <input
          className="rounded-2xl ml-auto text-gray-400 bg-gray-900 hover:bg-gray-850 h-10 min-w-80 px-5 "
          value={searchInput}
          placeholder="Search Channels"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          onKeyDown={async (e) => {
            if (e.key == "Enter") {
              //router.push('/search');
              const searchedData = await getSearchResults(searchInput);
              console.log(searchedData);
              setSearchResults(searchedData);
            }
          }}
        ></input>
      </div>
    </SearchProvider>
  );
}
