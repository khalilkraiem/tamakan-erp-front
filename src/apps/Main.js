import React from "react";
import Header from "../layouts/Header";
import SideBar from "../layouts/SideBar";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="pages">
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
