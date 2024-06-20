import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const ChannelPreview = (props) => {
  const router = useRouter();

  const open = async (channelLoginName) => {
    const queryParams = new URLSearchParams({
      c: `${channelLoginName}`,
    }).toString();

    router.push(`/channel?${queryParams}`);
    //router.push({pathname:`/channel/`, page:channelName});
  };
  const openLiveStream = (channelLoginName) => {
    open(channelLoginName);
  };

  const openChannel = (channelLoginName) => {
    open(channelLoginName);
  };

  const openChannelPreview = () => {
    if (props.liveStream.is_live) openLiveStream();
    else openChannel();
  };
  return (
    <a
      className="h-[50px] w-[75%] mt-4 ml-4 flex hover:cursor-pointer hover:bg-gray-900"
      onClick={() => open(props.liveStream.channelLoginName)}
    >
      <div className="w-[100%] flex">
        <img
          src={props.liveStream.thumbnailUrl}
          className="h-[50px] w-[50px] rounded-full"
        ></img>
        <div className="block content-center ml-5 text-left overflow-hidden">
          <h3 className="overflow-hidden whitespace-nowrap text-ellipsis">
            {props.liveStream.title}
          </h3>
          <h6 className="text-gray-400">{props.liveStream.game}</h6>
          <h6 className="text-gray-400">{props.liveStream.channelName}</h6>
          <h5 className="text-red-500">
            {props.liveStream.is_live ? "Live" : ""}
          </h5>
        </div>
      </div>
    </a>
  );
};

export default ChannelPreview;
