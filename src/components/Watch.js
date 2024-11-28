import React, { useEffect, useState, Link } from "react";
import { useDispatch } from "react-redux";
import { setMenuClose } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_API_KEY } from "../utils/constants";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const Watch = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMenuClose());
  }, []);

  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));
  const videoID = searchParams.get("v");

  //geting specific video id from url and displaying
  useEffect(() => {
    getSpecificVideo();
  }, [videoID]);

  const [specificVideo, setSpecificVideo] = useState({});
  const [showFullDescription, setShowFullDescription] = useState(false); // New state for description toggle
  const getSpecificVideo = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoID}&key=${YOUTUBE_API_KEY}`
    );
    const json = await data.json();
    //console.log("Specific Video: ", json.items[0].snippet);
    setSpecificVideo(json.items[0]);
  };

  console.log(specificVideo);

  const title = specificVideo?.snippet?.title;
  const channelTitle = specificVideo?.snippet?.channelTitle;
  const channelId = specificVideo?.snippet?.channelId;
  const thumbnails = specificVideo?.snippet?.thumbnails?.standard.url;
  const statistics = specificVideo?.statistics;
  const viewCount = statistics?.viewCount;
  const likeCount = statistics?.likeCount;
  const publishedAt = specificVideo?.snippet?.publishedAt;
  const description = specificVideo?.snippet?.description;

  



  //getting specific channel id from url and displaying chanel data
  useEffect(() => {
    if (!channelId) return;
    getSpecificChannel();
  }, [channelId]);

  const [specificChannel, setSpecificChannel] = useState({});

  const getSpecificChannel = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${YOUTUBE_API_KEY}`
    );
    const json = await data.json();
    //console.log("Specific Channel: ", json.items[0]);
    setSpecificChannel(json.items[0]);
  };

  //console.log(specificChannel);

  const channelThumbnails = specificChannel?.snippet?.thumbnails?.default.url;
  //const channelTitle = specificChannel?.snippet?.title;
  const channelSubscribers = specificChannel?.statistics?.subscriberCount;

  //Function for Views Format
  const formatViewsCount = (count) => {
    if (count < 1000) {
      return count;
    } else if (count >= 1000 && count < 1_000_000) {
      return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    } else if (count >= 1_000_000 && count < 1_000_000_000) {
      return (count / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (count >= 1_000_000_000) {
      return (count / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    return count;
  };

  //Function for Published Time Format
  const getRelativeTime = (publishedAt) => {
    const now = new Date();
    const publishedDate = new Date(publishedAt);
    const diffInSeconds = Math.floor((now - publishedDate) / 1000);
  
    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} min ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 604800) {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 2592000) {
      const weeks = Math.floor(diffInSeconds / 604800);
      return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 31536000) {
      const months = Math.floor(diffInSeconds / 2592000);
      return `${months} month${months > 1 ? 's' : ''} ago`;
    } else {
      const years = Math.floor(diffInSeconds / 31536000);
      return `${years} year${years > 1 ? 's' : ''} ago`;
    }
  };

  // Function to toggle description visibility
  // const truncatedDescription =
  //   description && description.length > 120
  //     ? description.slice(0, 120) + "...ReadMore"
  //     : description;
  const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
      };


  // Function for Channel Subscribers Format
  const formatSubscribersCount = (count) => {
    if (count < 1000) {
      return count; // Less than 1,000 subscribers
    } else if (count >= 1000 && count < 1_000_000) {
      return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'K'; // Thousands (e.g., 1.2K)
    } else if (count >= 1_000_000 && count < 1_000_000_000) {
      return (count / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M'; // Millions (e.g., 1.2M)
    } else if (count >= 1_000_000_000) {
      return (count / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B'; // Billions (e.g., 1.2B)
    }
    return count; // Default case
  };


  // Function for Likes Format
  const formatLikesCount = (count) => {
    if (count < 1000) {
      return count; // Less than 1,000 likes
    } else if (count >= 1000 && count < 1_000_000) {
      return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'K'; // Thousands (e.g., 1.2K)
    } else if (count >= 1_000_000 && count < 1_000_000_000) {
      return (count / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M'; // Millions (e.g., 1.2M)
    } else if (count >= 1_000_000_000) {
      return (count / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B'; // Billions (e.g., 1.2B)
    }
    return count; // Default case
  };




  return (
    <>
      <div className="w-8/12">
        {specificVideo && (
          <div>
            <iframe
              width="100%"
              height="480"
              src={`https://www.youtube.com/embed/${videoID}`}
              title={title}
              allowFullScreen
              className="rounded-xl"
            ></iframe>
            <h1 className="text-xl font-bold my-3">{title}</h1>
          </div>
        )}
        {specificChannel && (
          <div>
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src={channelThumbnails}
                    alt={title}
                    className="rounded-full w-10 h-10"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-md font-bold">{channelTitle}</p>
                  <p className="text-sm text-gray-500 text-xs">
                    {/* {(channelSubscribers / 1000) * 100}K Subscribers   */}
                    {formatSubscribersCount(channelSubscribers)} Subscribers
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-start gap-3">
                <button className="bg-gray-200 px-4 py-2 rounded-full">
                  {/* {Math.round((likeCount / 1000) * 100) / 100}K Likes */}
                  {formatLikesCount(likeCount)} Likes
                </button>
                <button className="bg-gray-200 px-4 py-2 rounded-full">
                  Dislike
                </button>
                <button className="bg-gray-200 px-4 py-2 rounded-full">
                  Share
                </button>
                <button className="bg-gray-200 px-4 py-2 rounded-full">
                  Download
                </button>
              </div>
            </div>
            <div className="bg-slate-200 rounded-lg p-3 mt-3">
              <div className="text-sm flex justify-start gap-5">
                <span className="font-bold"> 
                  {formatViewsCount(viewCount)} Views
                </span>
                <span className="font-bold">
                {getRelativeTime(publishedAt)} 
                </span>
              </div>
              <div className="">
                {/* {description} */}
                <span className="text-sm">
                  {showFullDescription ? description : `${description?.slice(0, 120)}...`}
                  {description?.length > 120 && (
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={toggleDescription}
                    >
                      {showFullDescription ? " Show Less" : " Read More"}
                    </span>
                  )}
                </span>
              </div>
            </div>
          </div>
        )}
        {!specificVideo && !specificChannel && <p>Loading...</p>}
        <div className="mt-3">
          <h1 className="text-xl font-bold mb-3">Comments</h1>
          <CommentsContainer />
        </div>
      </div>
      <div className="w-4/12">
        <div className="flex justify-start items-top flex-wrap gap-3 w-full">
          {/* {videos.map((video) => (
            <SuggestionVideo key={video.id} info={video} />
          ))} */}
          <LiveChat />
        </div>
      </div>
    </>
  );
};

export default Watch;
