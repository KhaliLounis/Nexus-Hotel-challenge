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
      state.rooms.map((item) => {
        if (item.id === action.payload) {
          item.available = false;
          return item;
        }
        return item
      })
    },
  },
});

export const { reserveRoom } = roomsSlice.actions;
export default roomsSlice.reducer;
