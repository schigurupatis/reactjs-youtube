import React from "react";

const SuggestionVideo = ({ info }) => {
  console.log(info);
  return (
    <div className="flex justify-start items-start gap-2">
      <img src={info.snippet.thumbnails.medium.url} alt={info.snippet.title} />
      <div className="flex flex-col justify-start items-start gap-1">
        <h3>{info.snippet.title}</h3>
        <p>{info.snippet.channelTitle}</p>
        <p>{info.snippet.publishedAt}</p>
      </div>
    </div>
  );
};

export default SuggestionVideo;
