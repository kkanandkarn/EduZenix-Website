import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import sidebarReducer from "./sidebarSlice";
import modalReducer from "./modalSlice";
import collegeReducer from "./collegeSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
    modal: modalReducer,
    college: collegeReducer,
  },
});

export default store;
