import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { YOUTUBE_API_KEY } from "../utils/constants";
import { Link } from "react-router-dom";

const Results = () => {
  const [videos, setVideos] = useState([]);

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search_query");

  useEffect(() => {
    if (searchQuery) {
      getSelectedSearchSuggestionVideos(searchQuery);
    }
  }, [searchQuery]);

  const getSelectedSearchSuggestionVideos = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}&key=${YOUTUBE_API_KEY}`
    );
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  };

  return (
    <div>
      <h1 className="my-3">
        Results for the "<span className="font-bold">{searchQuery}</span>"
      </h1>
      <div className="">
        {/* Render the list of videos */}
        {videos.length > 0 ? (
          <div className="w-full">
            {videos.map((video) => (
              <Link
                to={`/watch?v=${video.id.videoId}`}
                key={video.id.videoId}
                className="flex justify-start items-start gap-3 my-4 w-full"
              >
                <div className="w-5/12">
                  <img
                    src={video.snippet.thumbnails.high.url}
                    alt={video.snippet.title}
                    className=" object-cover rounded-xl w-[500px] h-[281px]"
                  />
                </div>
                <div className="w-7/12">
                  <h2 className="font-sm text-xl">{video.snippet.title}</h2>

                  <h6 className="text-xs my-3">{video.snippet.channelTitle}</h6>
                  <p className="text-sm my-3">{video.snippet.description}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p>No videos found.</p>
        )}
      </div>
    </div>
  );
};

export default Results;
