import { configureStore } from "@reduxjs/toolkit";
// import { filterReducer } from "./FilterSlice";
import { carsReducer } from "./CarsSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    // filter: filterReducer,
  },
});

export default store;
