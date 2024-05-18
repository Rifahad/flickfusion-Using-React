import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/UserReducer";

const store = configureStore({
  reducer: {
    Users: userReducer,
  },
});

export default store;
