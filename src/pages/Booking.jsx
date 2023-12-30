import React from "react";
import BookingUser from "../comps/BookingUser";
import Search from "../comps/Search";
import Pagination from "../comps/Pagination";
import { bookingData } from "./bookingData";
import './booking.css'
const Booking = () => {
  return (
    <div className="booking">

      <Search />
      <h1>Booking</h1>
      <div>
        {bookingData.map((item, index) => {
          return (
            <>
              <BookingUser
                key={index}
                img={item.img}
                name={item.name}
                status={item.status}
                date={item.date}
                suite={item.suite}
                room={item.room}
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

export default Booking;
