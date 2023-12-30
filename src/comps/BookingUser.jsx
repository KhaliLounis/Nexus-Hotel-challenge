import React from "react";
import "./bookinguser.css";
import arrow from "../assets/arrow.svg";
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const BookingUser = ({ img, name, status, date,place, suite, room}) => {

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
          <p style={{ marginLeft: "1rem" }}>{date}</p>
        ) : (
          <>
            <p>{date[0]}</p>
            <img src={arrow} alt="" />
            <p>{date[1]}</p>
          </>
        )}
      </div>
      <div className="place">
            <p>{place}</p>
      </div>
      <div className="icons">
        <FaCheck  size='1.5rem' style={{color: suite ? '#3B28CC' : '#8E8E8E', }}/>
        <IoMdClose size='2rem' style={{color: room ? '#3B28CC' : '#8E8E8E'}}/>
      </div>
    </div>
  );
};

export default BookingUser;
