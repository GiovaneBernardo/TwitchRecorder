"use client";
import React, { useEffect, useState } from "react";
import { getUser } from "../../services/getUser";
import { getChannelDataByLoginName } from "../../services/getChannelData";
import { useRouter, useSearchParams } from "next/navigation";

export default function Channel({ props }) {
  const searchParams = useSearchParams();

  const [channelData, setChannelData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const channelLoginName = searchParams.get("c");
    const fetchData = async () => {
      setLoading(true);
      console.log(channelLoginName);
      const channelData = await getChannelDataByLoginName(channelLoginName);
      console.log(channelData);

      if (channelData) setChannelData(channelData);
      else setError("err");

      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="">
      <img src={channelData.profile_image_url}></img>
      <h3>{channelData.display_name}</h3>
    </div>
  );
}
