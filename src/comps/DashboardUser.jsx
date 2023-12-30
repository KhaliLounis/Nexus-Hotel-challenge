import React from "react";
import "./dashboarduser.css";
import arrow from "../assets/arrow.svg";
import check from "../assets/check.svg";
import { FaArrowRight } from "react-icons/fa";
const DashboardUser = ({ img, name, status, date, suite, room }) => {
  let styles = {
    background:
      status === "Pending"
        ? "#8E8E8E"
        : status === "Done"
        ? "#28CC42"
        : status === "Cancel"
        ? "#CC2828"
        : "white",
    color: status === "Unverified" && "#999",
    width: "80px",
  };

  return (
    <div className="user">
      <div style={{ width: "5.6rem" }} className="username">
        <img src={img} alt="img" />
        <p>{name}</p>
      </div>
      <div style={styles} className="status">
        {status}
      </div>
      <div className="date" style={{ width: "7.5rem" }}>
        {typeof date === "string" ? (
          <p style={{marginLeft:'1rem'}}>{date}</p>
        ) : (
          <>
            <p>{date[0]}</p>
            <img src={arrow} alt="" />
            <p>{date[1]}</p>
          </>
        )}
      </div>
      <div className="check">
        <img src={check} alt="suite" className={!suite && "hidden"} />
        <img src={check} alt="room" className={!room && "hidden"} />
      </div>
    </div>
  );
};

export default DashboardUser;
