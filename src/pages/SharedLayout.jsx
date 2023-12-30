import React from "react";
import "./sharedlayout.css";
import Sidebar from "../comps/Sidebar";
import { Outlet } from "react-router-dom";
import RightSection from "../comps/RightSection";

const SharedLayout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="middle">
        <Outlet />
        <RightSection />
      </div>
    </div>
  );
};

export default SharedLayout;
