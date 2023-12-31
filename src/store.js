import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from './redux/BookingSlice';
import modalReducer from './redux/ModalSlice';
import roomsReducer from './redux/RoomSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    booking: bookingReducer,
    rooms: roomsReducer,
  },
});

