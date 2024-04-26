import React from "react";

const ChannelPreview = (props) => {
  console.log(props);
  return (
    <div className="flex">
      <img src={props.liveStream.thumbnailUrl} className="h-20 w-20 rounded-full"></img>
      <div className="block content-center ml-5">
        <h3>{props.liveStream.title}</h3>
        <h6>{props.liveStream.game}</h6>
        <h6>{props.liveStream.channelName}</h6>
        <h5 className="text-red-500">{props.liveStream.title ? "Live" : ""}</h5>
      </div>
    </div>
  );
};

export default ChannelPreview;
