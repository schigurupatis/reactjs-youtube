import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlay,
  faPhotoVideo,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="">
      <Link to="/">
        <div className="flex items-center gap-3 justify-start cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg">
          <FontAwesomeIcon icon={faHome} className="min-w-5" />
          Home
        </div>
      </Link>
      <Link to="/">
        <div className="flex items-center gap-3 justify-start cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg">
          <FontAwesomeIcon icon={faPlay} className="min-w-5" />
          Shorts
        </div>
      </Link>
      <Link to="/">
        <div className="flex items-center gap-3 justify-start cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg">
          <FontAwesomeIcon icon={faPhotoVideo} className="min-w-5" />
          Subscriptions
        </div>
      </Link>
      <Link to="/">
        <div className="flex items-center gap-3 justify-start cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg">
          <FontAwesomeIcon icon={faMusic} className="min-w-5" />
          Music
        </div>
      </Link>
    </div>
  );
};

export default SideBar;
