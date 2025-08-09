import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalName: "",
  modalData: "",
};

const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    setModalOpen(state, action) {
      const { modalName, modalData = "" } = action.payload;
      state.modalName = modalName;
      state.modalData = modalData;
    },

    setModalClose(state) {
      state.modalName = "";
      state.modalData = "";
    },
  },
});

export const { setModalOpen, setModalClose } = modelSlice.actions;
export default modelSlice.reducer;
