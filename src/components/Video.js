import React from "react";

const Video = ({ info }) => {
  console.log(info);

  //console.log(info.id);

  const { snippet, statistics } = info;
  const { title, channelTitle, publishedAt, thumbnails } = snippet;
  const { viewCount } = statistics;

  const modifedTitle = title.length > 60 ? title.slice(0, 60) + "..." : title;
  const modifedchannelTitle =
  channelTitle.length > 26 ? channelTitle.slice(0, 26) + "..." : channelTitle;
  
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

  return (
    <div className="my-5 w-[373px]">
      <img
        src={thumbnails.standard.url}
        alt={title}
        className="w-[373px] h-[209px] rounded-xl object-cover"
      />
      <div className="flex justify-between items-top gap-1 w-full mt-3">
        <div className="w-2/12">
          <img
            src={thumbnails.standard.url}
            alt="avatar"
            className="w-9 h-9 rounded-full"
          />
        </div>
        <div className="flex flex-col w-9/12">
          <h1 className="font-bold">{modifedTitle}</h1>
          <h5 className="text-gray-500">{modifedchannelTitle}</h5>
          <h6 className="text-gray-500">
            <span className="mr-4 text-sm">
              {formatViewsCount(viewCount)} Views
            </span>
            <span className="mr-4 text-sm">
              {getRelativeTime(publishedAt)} 
            </span>
          </h6>
        </div>
        <div className="w-1/12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
            className="cursor-pointer"
          >
            <path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export const AddVideo = ({ info }) => {
  return (
    <div className="border border-gray-300">
      <Video info={info} />
      <h3 className="text-gray-500 text-sm text-center">
        Sponsored - Add Video - Firebase 
      </h3>
    </div>
  );
};

export default Video;
