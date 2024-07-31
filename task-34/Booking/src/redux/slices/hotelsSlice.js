import { createSlice } from "@reduxjs/toolkit";

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: {
    items: [],
    loading: false,
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

export default hotelsSlice.reducer;
export const { setItems, setLoading } = hotelsSlice.actions;
