import React from "react";
import "./sharedlayout.css";
import Sidebar from "../comps/Sidebar";
import { Outlet } from "react-router-dom";
import RightSection from "../comps/RightSection";
import ModalSlice from "../redux/ModalSlice";
import { useSelector } from "react-redux";


const SharedLayout = () => {
  const open =useSelector(state=> state.modal.open)
  return (
    <div className={`layout ${open && 'modal'}`}>
      <Sidebar />
      <div className="middle">
        <Outlet />
        <RightSection />
      </div>
    </div>
  );
};

export default SharedLayout;
