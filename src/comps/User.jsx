import React from "react";
import "./user.css";
import { IoMdClose } from "react-icons/io";
import arrow from "../assets/arrow.svg";
const User = ({ img, name, date }) => {
  return (
    <div className="user">
      <div className="user-date">
        <div style={{ width: "5.6rem", marginRight:'3rem' }} className="username">
          <img src={img} alt="img" />
          <p>{name}</p>
        </div>
        <div className="date" style={{ width: "7.5rem" }}>
          {typeof date === "string" ? (
            <p>{date}</p>
          ) : (
            <>
              <p>{date[0]}</p>
              <img src={arrow} alt="" />
              <p>{date[1]}</p>
            </>
          )}
        </div>
      </div>
      <div className="icons">
        <IoMdClose size="2rem" style={{ color: "#8E8E8E",cursor:'pointer' }} />
      </div>
    </div>
  );
};

export default User;
