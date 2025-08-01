import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import sidebarReducer from "./sidebarSlice";
import modelReducer from "./modelSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
    model: modelReducer,
  },
});

export default store;
