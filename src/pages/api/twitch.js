const clientId = 'ck5n7php5x3m1hov8sym4w7d3itfpf';
const clientSecret = 'skxqau4v03dx1kn4ydlo2r94t6iwky';

export default async function handler(req, res) {
    const API_KEY = process.env.TWITCH_API_KEY;
    
    // Get access token
    const accessTokenResponse = await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`);
    const accessToken = accessTokenResponse.data.access_token;

    // Get top livestreams
    const response = await axios.get('https://api.twitch.tv/helix/streams', {
      headers: {
        'Client-ID': clientId,
        'Authorization': `Bearer ${accessToken}`
      },
      params: {
        first: 10,
        sort: 'viewers'
      }
    });
  
    if (response.ok) {
      const data = await response.json();
      res.status(200).json(data);
    } else {
      res.status(response.status).end();
    }
  }