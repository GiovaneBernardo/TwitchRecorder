"use client";
import Head from "next/head";
import StreamPreview from "../../components/StreamPreview";
import ChannelPreview from "../../components/ChannelPreview";
import { useState, useContext, useSyncExternalStore } from "react";
import { getAccessToken } from "../../services/getAccessToken";

import { SearchContext, SearchProvider } from "../../contexts/SearchContext";
import { useEffect } from "react";

const displayLivestreamArray = (array) => {
  return array.map((stream) => {
    return (
      <div>
        <ChannelPreview liveStream={stream}></ChannelPreview>
      </div>
    );
  });
};

export default function SearchPage({ Component, pageProps }) {
  const search = useContext(SearchContext);

  const [homeLivestreamsData, setHomeLivestreamsData] = useState([]);
  const searchChannelsByName = async (searchString) => {
    const queryParams = {
      query: searchString,
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
        channelName: stream.display_name,
        title: stream.title,
        game: stream.game_name,
        thumbnailUrl: stream.thumbnail_url,
      }));

      setHomeLivestreamsData(liveStreams);
    }
  };

  useEffect(() => {
    searchChannelsByName(search.searchInput);
  }, []);

  return (
    <div className="block pl-52">
      <div className="grid lives-container gap-4">
        {displayLivestreamArray(homeLivestreamsData)}
      </div>
    </div>
  );
}
