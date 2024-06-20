export const getAccessToken = async () => {
  // Get access token
  const tokenParams = new URLSearchParams({
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
    client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    grant_type: "client_credentials",
  });
  const accessTokenResponse = await fetch(`https://id.twitch.tv/oauth2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: tokenParams,
  });
  const accessTokenData = await accessTokenResponse.json();
  const accessToken = await accessTokenData.access_token;
  return accessToken;
};