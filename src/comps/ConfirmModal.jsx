import React from "react";
import "./confirmodal.css";
import { closeModal } from "../redux/ModalSlice";
import { removeBooking } from "../redux/BookingSlice";
import { useDispatch, useSelector } from "react-redux";

const ConfirmModal = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.modal.id);
  return (
    <div className="model">
      <div className="abovelayer"></div>
      <div className="confirmodal">
        <h1>Are You Sure? </h1>
        <p>Please confirm this operation before we start</p>
        <div className="buttons">
          <button 
            onClick={() => {
              dispatch(removeBooking(id));
              dispatch(closeModal());
            }}
          >
            Confirm
          </button>
          <button onClick={() => dispatch(closeModal())}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
