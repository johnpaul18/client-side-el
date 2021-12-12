import { createSlice } from "@reduxjs/toolkit";

const elementSlice = createSlice({
  name: "element",
  initialState: {
    data: null,
  },

  reducers: {
    getel: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getel } = elementSlice.actions;
export default elementSlice.reducer;
