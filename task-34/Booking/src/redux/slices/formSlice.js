import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    values: {
      check_in: "",
      check_out: ""
    },
    isFilled: false,
  },
  reducers: {
    setFormValues: (state, action) => {
      const { check_in, check_out, ...rest } = action.payload;
      state.values = {
        ...rest,
        check_in: new Date(check_in).toLocaleString(),
        check_out: new Date(check_out).toLocaleString(),
      };
      state.isFilled = Object.keys(action.payload).length > 0;
    },
    clearForm: (state) => {
      state.values = {
        check_in: "",
        check_out: ""
      };
      state.isFilled = false;
    }
  }
});

export default formSlice.reducer;
export const { setFormValues, clearForm } = formSlice.actions;
