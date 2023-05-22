import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./State";
import { OpenCartSidebarReducer, CloseCartSidebarReducer } from "./Reducers";

export const slice = createSlice({
  name: "isOpenCartSidebar",
  initialState,
  reducers: {
    OpenCartSidebar: OpenCartSidebarReducer,
    CloseCartSidebar: CloseCartSidebarReducer,
  },
});

export const { OpenCartSidebar, CloseCartSidebar } = slice.actions;

export default slice.reducer;
