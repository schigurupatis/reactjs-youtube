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
  // const modifiedviewCount = viewCount
  //   .toString()
  //   .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const viewCountThousands = viewCount / 1000;
  const modifiepublishedAt = publishedAt.slice(0, 10);

  return (
    <div className="my-5 w-[343px]">
      <img
        src={thumbnails.standard.url}
        alt={title}
        className="w-[343px] h-[193px] rounded-xl object-cover"
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
              {viewCountThousands + "K"} Views
            </span>
            <span className="mr-4 text-sm">{modifiepublishedAt}</span>
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
        Sponsored - Add Video - Firebase CI/CD Github Actions
      </h3>
    </div>
  );
};

export default Video;
