import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./Operations";

const isLoading = (state, action) => {
  state.isLoading = true;
};
const error = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const CarsSlice = createSlice({
  name: "cars",
  initialState: {
    allCars: [],
    favoriteCars: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchCars.pending]: isLoading,
    [fetchCars.fulfilled](state, action) {
      state.allCars = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    [fetchCars.rejected]: error,
  },
});

export const carsReducer = CarsSlice.reducer;
