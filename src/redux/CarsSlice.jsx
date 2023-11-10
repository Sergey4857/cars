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
    removeFavoriteCar(state, action) {
      const index = state.favoriteCars.findIndex(
        (item) => item.id === action.payload
      );
      state.favoriteCars.splice(index, 1);
    },
  },
});
export const { addFavoriteCar } = carsSlice.actions;
export const { removeFavoriteCar } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
