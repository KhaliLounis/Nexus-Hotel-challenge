import React from "react";
import "./sidebar.css";
import Hotel from "../assets/hotel.svg";
import { NavLink } from "react-router-dom";
import Dashboard from "../assets/dashboard.svg";
import Booking from "../assets/booking.svg";
import Users from "../assets/users.svg";
import Rooms from "../assets/rooms.svg";
import Settings from "../assets/settings.svg";
import LogOut from "../assets/Log Out.svg";

const Sidebar = () => {
  let navlinks = [
    {
      icon: Dashboard,
      name: "Dashboard",
    },
    {
      icon: Booking,
      name: "Booking",
    },
    {
      icon: Users,
      name: "Users",
    },
    {
      icon: Rooms,
      name: "Rooms",
    },
    {
      icon: Settings,
      name: "Settings",
    },
    {
      icon: LogOut,
      name: "Log Out",
    },
  ];
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Hotel} alt={Hotel} />
      </div>
      <div className="links">
        {navlinks.map((item, index) => {
          let link =
            item.name === "Dashboard"
              ? "/"
              : `/${item.name.toLowerCase()}`.replace(" ", "");
          if (index < 4) {
            return (
              <NavLink
                to={`${link}`}
                className="nav"
                style={({ isActive }) => {
                  if (isActive) {
                    return { background: "#6656E1", color: "white" };
                  }
                }}
              >
                <img src={item.icon} alt={item.name} />
                <p>{item.name}</p>
              </NavLink>
            );
          }
        })}
      </div>
      <div className="below-links">
        {navlinks.map((item, index) => {
          if (index >= 4) {
            return (
              <NavLink
                className="nav"
                style={({ isActive }) => {
                  if (!isActive) {
                    return { background: "#6656E1", color: "white" };
                  }
                }}
              >
                <img src={item.icon} alt={item.name} />
                <p>{item.name}</p>
              </NavLink>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Sidebar;
