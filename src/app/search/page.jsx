"use client";
import Head from "next/head";
import StreamPreview from "../../components/StreamPreview";
import ChannelPreview from "../../components/ChannelPreview";
import { useState, useContext, useSyncExternalStore } from "react";
import { getAccessToken } from "../../services/getAccessToken";

import { SearchContext, SearchProvider } from "../../contexts/SearchContext";
import { useEffect } from "react";

const displayLivestreamArray = (array) => {
  if (!array) return <div></div>;

  return array.map((stream) => {
    return (
      <div key={stream.channelLoginName}>
        <ChannelPreview liveStream={stream}></ChannelPreview>
      </div>
    );
  });
};

export default function SearchPage({ Component, pageProps }) {
  const { searchInput, setSearchInput, searchResults, setSearchResults } =
    useContext(SearchContext);
  return (
    <div className="block pl-52">
      <div className="grid lives-container gap-4">
        {displayLivestreamArray(searchResults)}
      </div>
    </div>
  );
}
