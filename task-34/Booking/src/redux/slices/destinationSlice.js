import { createSlice } from "@reduxjs/toolkit";

const destinationSlice = createSlice({
  name: "destination",
  initialState: {
    items: [],
    loading: true,
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

export default destinationSlice.reducer;
export const { setItems, setLoading } = destinationSlice.actions;
