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
    setMenuOpenDefault: (state) => {
      state.isMenuOpen = true;
    },
  },
});

export const { setMenuOpen, setMenuClose, setMenuOpenDefault } = appSlice.actions;
export default appSlice.reducer;
