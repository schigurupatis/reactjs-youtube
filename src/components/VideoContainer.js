import React, { useEffect, useState } from "react";
import Video, { AddVideo } from "./Video";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideosData();
  }, []);

  const getVideosData = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  //console.log(videos[0]);

  return (
    <div className="">
      <div className="flex justify-start items-top flex-wrap gap-3">
        {videos[19] && <AddVideo info={videos[19]} />}
        {videos.map((video) => (
          <Link to={`/watch?v=${video.id}`} key={video.id}>
            <Video info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
