export default async function handler(req, res) {
  // Get access token
  const tokenParams = new URLSearchParams({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: "client_credentials"
  });
  const accessTokenResponse = await fetch(`https://id.twitch.tv/oauth2/token`, {
      method: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded"
      },
      body: tokenParams
  });
  const accessTokenData = await accessTokenResponse.json();
  const accessToken = accessTokenData.access_token;

  // Get top livestreams
  console.log("fetching");
  const queryParams = new URLSearchParams({
      first: 10,
      sort: "viewers"
  });
  const response = await fetch('https://api.twitch.tv/helix/streams?' + queryParams.toString(), {
      headers: {
          'Client-ID': process.env.CLIENT_ID,
          'Authorization': `Bearer ${accessToken}`
      }
  });

  if (response.ok) {
      const data = await response.json();
      console.log(data);
      res.status(200).json(data);
  } else {
      res.status(response.status).end();
  }
}