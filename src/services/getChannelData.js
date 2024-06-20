import { getAccessToken } from "./getAccessToken";
const getChannelData = async (queryParams) => {
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
    const data = requestJson.data[0];
    return data;
  } else return [];
};

export const getChannelDataById = async (broadcasterId) =>{
  const queryParams = {
    broadcaster_id: broadcasterId,
  };
  return await getChannelData(queryParams);
}

export const getChannelDataByLoginName = async (broadcasterLoginName) =>{
  // const queryParams = {
  //   broadcaster_login: broadcasterLoginName,
  // };
  //return await getChannelData(queryParams);

  const accessToken = await getAccessToken();
  const response = await fetch(
    "https://api.twitch.tv/helix/users?login=" + broadcasterLoginName,
    {
      headers: {
        "Client-Id": process.env.NEXT_PUBLIC_CLIENT_ID || "",
        Authorization: `Bearer ${accessToken}`, // assuming getAccessToken is a function
      },
    }
  );

  if (response.ok) {
    const requestJson = await response.json();
    const data = requestJson.data[0];
    return data;
  } else return [];

}