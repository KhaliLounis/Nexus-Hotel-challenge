import React from "react";
import Stats from "../comps/Stats";
import Pagination from "../comps/Pagination";
import Search from "../comps/Search";
import "./dashboard.css";
import filter from "../assets/filter.svg";
import { dashboarData } from "./dashboardData";
import DashboardUser from "../comps/DashboardUser";

const Dashboard = () => {
  let stats = [
    {
      count: "30,000",
      desc: "Booking Operations",
    },
    {
      count: "12,000",
      desc: "Done Booking",
    },
    {
      count: "17,000",
      desc: "Satisfied Clients",
    },
  ];

  return (
    <div className="dashboard">
      <Search/>
      <div className="stats">
        <div>
          <p className="in">In the last 30 days:</p>
        </div>
        <div>
          {stats.map((item, index) => {
            return <Stats key={index} count={item.count} desc={item.desc} />;
          })}
        </div>
      </div>
      <div className="users">
        <p className="all">All users</p>
        <div className="filter">
          <p className="monitor">Monitor users, Booking, etc.</p>
          <div className="filter icon">
            <img src={filter} alt="filter" />
            <p>Filter</p>
          </div>
        </div>
        <div className="users-table">
          <div className="header">
            <p>User</p>
            <p>Status</p>
            <p>Date</p>
            <p>Suite</p>
            <p>Room</p>
          </div>
          <div className="users-list">
            {dashboarData.map((item, index) => {
              return (
                <>
                  <DashboardUser
                    key={index}
                    img={item.img}
                    name={item.name}
                    status={item.status}
                    date={item.date}
                    suite={item.suite}
                    room={item.room}
                  />
                  <hr />
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Pagination/>
    </div>
  );
};

export default Dashboard;
