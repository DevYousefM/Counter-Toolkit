import { createSlice } from "@reduxjs/toolkit";

const initState = {
  value: 0,
};

export const counterReducer = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
    decreament: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    increamentByAmount: (state, action) => {
      if (action.payload > 0) {
        state.value += Number(action.payload);
      }
    },
  },
});

export const { increament, decreament, increamentByAmount } =
  counterReducer.actions;
export default counterReducer.reducer;
