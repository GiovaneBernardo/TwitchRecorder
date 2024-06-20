import { getAccessToken } from "./getAccessToken";
export const getUser = async (loginName) => {
  const queryParams = {
    login: loginName,
  };
  const accessToken = await getAccessToken();
  const response = await fetch(
    "https://api.twitch.tv/helix/users?query=" + queryParams.query,
    {
      headers: {
        "Client-Id": process.env.NEXT_PUBLIC_CLIENT_ID || "",
        Authorization: `Bearer ${accessToken}`, // assuming getAccessToken is a function
      },
    }
  );

  if (response.ok) {
    const requestJson = await response.json();
    const data = requestJson;
    return data.data[0];
  } else return [];
};