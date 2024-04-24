import React from "react";

const StreamPreview = (props) => {
  return (
    <>
    <div>
      <img src={props.liveStream.thumbnailUrl}></img>
      <h3>{props.liveStream.title}</h3>
      <h6>{props.liveStream.game}</h6>
    </div>
    </>
  );
}

export default StreamPreview;
