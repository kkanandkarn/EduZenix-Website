import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import sidebarReducer from "./sidebarSlice";
import modalReducer from "./modalSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
    modal: modalReducer,
  },
});

export default store;
