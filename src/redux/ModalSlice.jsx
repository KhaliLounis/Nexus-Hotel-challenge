import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  id:0
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.open = true;
      state.id = action.payload
    },
    closeModal: (state, action) => {
      state.open = false;
    },
  },
});

export const  {openModal, closeModal} = modalSlice.actions
export default modalSlice.reducer