import { createSlice } from "@reduxjs/toolkit";

import { IisOpenCartSidebarState } from "./interfaces";

export const slice = createSlice({
  name: "isOpenCartSidebar",
  initialState: {
    isOpenCartSidebar: false,
  },
  reducers: {
    OpenCartSidebar(state: IisOpenCartSidebarState) {
      return { ...state, isOpenCartSidebar: true };
    },
    CloseCartSidebar(state: IisOpenCartSidebarState) {
      return { ...state, isOpenCartSidebar: false };
    },
  },
});

export const { OpenCartSidebar, CloseCartSidebar } = slice.actions;

export default slice.reducer;
