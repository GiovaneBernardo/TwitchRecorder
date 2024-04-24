"use client";
import Head from "next/head";
import StreamPreview from "../components/StreamPreview";
import { useState, useContext, useSyncExternalStore } from "react";
import { getAccessToken } from "../services/getAccessToken";

import { SearchContext, SearchProvider } from "../contexts/SearchContext";

const displayLivestreamArray = (array) => {
  return array.map((stream) => {
    return (
      <>
        <StreamPreview liveStream={stream}></StreamPreview>
      </>
    );
  });
};

const colorType = "red-50";
export default function Home({ Component, pageProps }) {
  //fetchData();
  const [counter, setCounter] = useState(0);
  const search = useContext(SearchContext);

  const [homeLivestreamsData, setHomeLivestreamsData] = useState([
    {
      channelName: "theprimeagen",
      title: "Programming a twitch downloader in GO",
      game: "Programming",
      thumbnailUrl: "",
    },
  ]);
  const fetchData = async () => {
    console.log(search);
    const queryParams = {
      query: search.searchInput,
    };
    const accessToken = await getAccessToken();
    const response = await fetch(
      "https://api.twitch.tv/helix/search/channels?query=" + queryParams.query,
      {
        headers: {
          "Client-Id": process.env.NEXT_PUBLIC_CLIENT_ID || "",
          Authorization: `Bearer ${accessToken}`, // assuming getAccessToken is a function
        },
      }
    );

    if (response.ok) {
      const requestJson = await response.json();
      const data = requestJson.data;
      const liveStreams = data.map((stream) => ({
        channelName: stream.user_name,
        title: stream.title,
        game: stream.game_name,
        thumbnailUrl: stream.thumbnail_url,
      }));

      setHomeLivestreamsData(liveStreams);
    }
  };

  return (
    <div className="">
      <h1 className="">qweeqweqweqwqew</h1>
      {/* <StreamPreview liveStream={homeLivestreamsData[0]}></StreamPreview> */}
      {displayLivestreamArray(homeLivestreamsData)}
      <button
        onClick={() => {
          setCounter(counter + 1);
          fetchData();
        }}
      >
        CLick me
      </button>
    </div>
  );
}
