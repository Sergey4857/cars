import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    allCars: [],
    favoriteCars: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addFavoriteCar(state, action) {
      state.favoriteCars.push(action.payload);
    },
  },
});
export const { addFavoriteCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
