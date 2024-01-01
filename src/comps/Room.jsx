import React from "react";
import "./room.css";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../redux/ModalSlice";
import RoomModal from "./RoomModal";

const Room = ({ place, bed, available, person, id }) => {
  let open = useSelector((state) => state.modal.open);
  const modalId = useSelector((state) => state.modal.id);

  const dispatch = useDispatch();
  return (
    <>
      <div className="room">
        <p>{place}</p>
        <p>{bed}</p>
        <p>{person}</p>
        <p>{!available && "Not "} Available</p>
        {available ? (
          <button
            onClick={() => {
              dispatch(openModal(id));
            }}
          >
            Booking
          </button>
        ) : (
          <button style={{ cursor: "default", background: "#28CC42" }}>
            Booked
          </button>
        )}
      </div>
      {open && modalId === id && <RoomModal room={place} />}
    </>
  );
};

export default Room;
