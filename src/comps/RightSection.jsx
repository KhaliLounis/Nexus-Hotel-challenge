import React from "react";
import "./rightsection.css";
import bell from "../assets/bell.svg";
import profilepic from "../assets/profilepic.svg";
import loyal0 from "../assets/loyal0.png";
import loyal1 from "../assets/loyal1.png";
const Customer = ({ name, img, count }) => {
  return (
    <div className="loyal">
      <div className="data">
        <img src={img} alt="" />
        <p>{name}</p>
      </div>
      <p className='booking-count'>+{count} Bookings</p>
    </div>
  );
};

const RightSection = () => {
  let loyals = [
    {
      name: "Karima",
      count: 10,
      img: loyal0,
    },
    {
      name: "Karim",
      count: 5,
      img: loyal1,
    },
  ];

  return (
    <div className="right">
      <div className="profile">
        <div className="profile-data">
          <img src={profilepic} alt="" />
          <div className="profile-creds">
            <p>Ahmed Ahmed</p>
            <p>Admin</p>
          </div>
        </div>
        <div className="bell">
          <img src={bell} alt="" />
        </div>
      </div>
      <div className="customers">
        <h1>Loyal Customers</h1>
        {loyals.map((item, index) => {
          return (
            <Customer name={item.name} img={item.img} count={item.count} />
          );
        })}
        <button>View all</button>
      </div>
      <div className="async">
        <h1>Async Data</h1>
        <p>For async data between local storage and database.</p>
        <button>Async</button>
      </div>
    </div>
  );
};

export default RightSection;
