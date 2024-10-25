import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router";
import Header from "./Header";
// import { useSelector } from "react-redux";

const Body = () => {
  // const setMenuOpenDefault = useSelector((store) => store.app.setMenuOpenDefault);
  // console.log("SidebarMenu", setMenuOpenDefault)


  return (
    <div>
      <Header />
      <div className="flex justify-start gap-3 px-5 py-5 w-full">
        <SideBar />
        {/* {setMenuOpenDefault && <SideBar />} */}
        {/* <MainContainer />
        <Watch /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
