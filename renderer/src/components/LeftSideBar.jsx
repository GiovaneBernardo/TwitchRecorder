"use client";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { SearchContext, SearchProvider } from "../contexts/SearchContext";
import { getSearchResults } from "../services/getSearchResults";
import ChannelPreview from "./ChannelPreview";

export default function LeftSideBar() {
  const router = useRouter();
  const { searchInput, setSearchInput, searchResults, setSearchResults } =
    useContext(SearchContext);

  const displayLivestreamArray = (array) => {
    if (!array) return <div></div>;

    return array.map((stream) => {
      return <ChannelPreview liveStream={stream}></ChannelPreview>;
    });
  };

  return (
    <SearchProvider>
      <div className="w-[20%] min-h-[100%] text-center">
        {displayLivestreamArray(searchResults)}
      </div>
    </SearchProvider>
  );
}
