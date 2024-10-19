import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    setMenuOpen: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setMenuClose: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { setMenuOpen, setMenuClose } = appSlice.actions;
export default appSlice.reducer;
