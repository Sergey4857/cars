import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filter: "",
  },
  reducers: {
    filterCars(state, action) {
      state.filter = action.payload;
      return state;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { filterCars } = filterSlice.actions;
