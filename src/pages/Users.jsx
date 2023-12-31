import React from "react";
import User from "../comps/User";
import Search from "../comps/Search";
import Pagination from "../comps/Pagination";
import { bookingData } from "../redux/bookingData";
import "./users.css";
const Users = () => {
  return (
    <div>
      <Search />
      <h1>Users</h1>
      <div className="users-list">
        {bookingData.map((item, index) => {
          return (
            <>
              <User
                key={index}
                img={item.img}
                name={item.name}
                date={item.date}
              />
              <hr />
            </>
          );
        })}
      </div>
      <Pagination />
    </div>
  );
};

export default Users;
