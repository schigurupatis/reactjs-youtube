import React from "react";
import VideoContainer from "./VideoContainer";
import Buttons from "./Buttons";

const MainContainer = () => {
  return (
    <div className="flex flex-col w-full">
      <Buttons />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
