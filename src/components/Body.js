import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router";
import Header from "./Header";

const Body = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-start gap-3 px-5 py-5 w-full">
        <SideBar className="" />
        {/* <MainContainer />
        <Watch /> */}
        <Outlet className="" />
      </div>
    </div>
  );
};

export default Body;
