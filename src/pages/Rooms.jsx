import React from "react";
import Room from "../comps/Room";
import Search from "../comps/Search";
import Pagination from "../comps/Pagination";
import "./rooms.css";
import { useSelector } from "react-redux";
const Rooms = () => {
  const { rooms } = useSelector((state) => state.rooms);

  return (
    <div >
      <Search />
      <h1>Rooms</h1>
      <div className="rooms-list">
        {rooms.map((item, index) => {
          return (
            <>
              <Room
                key={index}
                bed={item.bed}
                available={item.available}
                person={item.person}
                place={item.place}
                id={item.id}
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
