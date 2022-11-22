import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./userReducer";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
