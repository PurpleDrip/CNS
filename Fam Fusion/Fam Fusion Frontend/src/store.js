import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/userSlice";
import profileReducer from "./Features/profileSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
  },
});

export default store;
