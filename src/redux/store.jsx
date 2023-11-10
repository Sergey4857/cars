import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./CarsSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});

export default store;
