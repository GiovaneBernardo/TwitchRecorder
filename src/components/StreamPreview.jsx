import React from "react";

const changeStreamThumbnailUrlSize = (url, width, height)=>{
  return url.replace('{width}', width).replace('{height}', height);
}

const StreamPreview = (props) => {
  return (
    <div>
      <img src={changeStreamThumbnailUrlSize(props.liveStream.thumbnailUrl, 300, 175)}></img>
      <h3>{props.liveStream.title}</h3>
      <h6>{props.liveStream.game}</h6>
      <h6>{props.liveStream.channelName}</h6>
    </div>
  );
}

export default StreamPreview;
