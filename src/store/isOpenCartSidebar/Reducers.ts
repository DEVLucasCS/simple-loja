import { IisOpenCartSidebarState } from "./interfaces";

export const OpenCartSidebarReducer = (state: IisOpenCartSidebarState) => {
  return { ...state, isOpenCartSidebar: true };
};

export const CloseCartSidebarReducer = (state: IisOpenCartSidebarState) => {
  return { ...state, isOpenCartSidebar: false };
};
