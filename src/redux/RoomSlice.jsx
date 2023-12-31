import { createSlice } from "@reduxjs/toolkit";
import { roomsData } from "./roomsData";

const initialState = {
  rooms: roomsData,
};

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    reserveRoom: (state, action) => {
      room = state.rooms.find((item) => item.id === action.payload);
      room.available === false;
    },
  },
});

export const { reserveRoom } = roomsSlice.actions;
export default roomsSlice.reducer;
