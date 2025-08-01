import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  model: "",
};

const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    setModelOpen(state, action) {
      const { modelName } = action.payload;
      state.model = modelName;
    },

    setModelClose(state) {
      state.model = "";
    },
  },
});

export const { setModelOpen, setModelClose } = modelSlice.actions;
export default modelSlice.reducer;
