import { getAccessToken } from "./getAccessToken";
export const getSearchResults = async (searchString) => {
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
      channelLoginName: stream.broadcaster_login,
      channelName: stream.display_name,
      title: stream.title,
      game: stream.game_name,
      thumbnailUrl: stream.thumbnail_url,
    }));

    return liveStreams;
  } else return [];
};