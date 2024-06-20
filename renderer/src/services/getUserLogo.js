import { getAccessToken } from "./getAccessToken";
export const getUserLogo = async (login) => {
  const queryParams = {
    login: login,
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
    const data = requestJson.data[0];
    return data.profile_image_url;
  } else return [];
};