"use client";
import Head from "next/head";
import StreamPreview from "../components/StreamPreview";
import ChannelPreview from "../components/ChannelPreview";
import { useState, useContext, useSyncExternalStore } from "react";
import { getAccessToken } from "../services/getAccessToken";
import Link from "next/link";

import { SearchContext, SearchProvider } from "../contexts/SearchContext";
const displayLivestreamArray = (array) => {
  if (!array) return <div></div>;

  return array.map((stream) => {
    return <ChannelPreview liveStream={stream}></ChannelPreview>;
  });
};

const colorType = "red-50";
export default function Home({ Component, pageProps }) {
  //fetchData();
  const [counter, setCounter] = useState(0);

  const { searchInput, setSearchInput, searchResults, setSearchResults } =
    useContext(SearchContext);

  return (
    <div className="flex">
      <div className="lives-container flex flex-wrap gap-4">
        {/* {displayLivestreamArray(searchResults)} */}

        <Link
          onClick={() => {
            setCounter(counter + 1);
          }}
          href={"/search"}
        ></Link>
      </div>
    </div>
  );
}
