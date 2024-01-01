import React from "react";
import "./roomodal.css";
import { closeModal } from "../redux/ModalSlice";
import { reserveRoom } from "../redux/RoomSlice";
import { useDispatch, useSelector } from "react-redux";

const RoomModal = ({ room }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.modal.id);
  return (
    <div className="model">
      <div className="abovelayer"></div>
      <div className="roomodal">
        <h1>Add Booking</h1>
        <div className="form">
          <div className="main-data">
            <input type="text" id="name" name="name" placeholder="Name"></input>
            <input
              type="text"
              id="room"
              name="room"
              placeholder="Room"
              value={room}
              readOnly
            ></input>
          </div>
          <div className="dates">
            <input
              type="date"
              id="startdate"
              name="startdate"
              placeholder="Start Date"
            />
            <input
              type="date"
              id="enddate"
              name="enddate"
              placeholder="End Date"
            />
          </div>
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              dispatch(closeModal());
              dispatch(reserveRoom(id));
            }}
          >
            Confirm
          </button>
          <button className="cancel" onClick={() => dispatch(closeModal())}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomModal;
