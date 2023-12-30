import React from "react";
import Room from "../comps/Room";
import Search from "../comps/Search";
import Pagination from "../comps/Pagination";
import "./rooms.css";
import { roomsData } from "./roomsData";
const Rooms = () => {
  return (
    <div >
      <Search />
      <h1>Rooms</h1>
      <div className="rooms-list">
        {roomsData.map((item, index) => {
          return (
            <>
              <Room
                key={index}
                bed={item.bed}
                available={item.available}
                person={item.person}
                place={item.place}
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

export default Rooms;
