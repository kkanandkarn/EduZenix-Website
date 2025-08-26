import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collegeId: "",
  collegeDetails: "",
};

const collegeSlice = createSlice({
  name: "collegeDetails",
  initialState,
  reducers: {
    collegeDetails(state, action) {
      const { collegeId, collegeDetails } = action.payload;
      state.collegeId = collegeId;
      state.collegeDetails = collegeDetails;
    },

    clearCollegeDetails(state) {
      state.collegeId = "";
      state.collegeDetails = "";
    },
  },
});

export const { collegeDetails, clearCollegeDetails } = collegeSlice.actions;
export default collegeSlice.reducer;
