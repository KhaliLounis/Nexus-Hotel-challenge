import React from "react";
import BookingUser from "../comps/BookingUser";
import Search from "../comps/Search";
import Pagination from "../comps/Pagination";
import "./booking.css";
import { useSelector } from "react-redux";

const Booking = () => {
  const { bookings } = useSelector((state) => state.booking);
  return (
    <div className="booking">
      <Search />
      <h1>Booking</h1>
      <div>
        {bookings.map((item, index) => {
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

export default Booking;
