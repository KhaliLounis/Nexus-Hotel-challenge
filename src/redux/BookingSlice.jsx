import { createSlice } from "@reduxjs/toolkit";
import { bookingData } from "./bookingData";
const initialState = {
    bookings: bookingData
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {

    removeBooking: (state, action) => { 

      state.bookings = state.bookings.filter(item=> item.id!== action.payload)
    },

  },
});

export const  {removeBooking} = bookingSlice.actions
export default bookingSlice.reducer