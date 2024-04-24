import React from "react";
import StreamPreview from "../components/StreamPreview";

const liveStreams = [{channelName:"theprimeagen", title:"Programming a twitch downloader in GO", game:"Programming"}];

function Home() {
  return (
    <>
    <div>
      <StreamPreview liveStream={liveStreams[0]}></StreamPreview>
    </div>
      <h1>Home</h1>
    </>
  );
}

export default Home;
