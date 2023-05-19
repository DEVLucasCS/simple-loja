import { configureStore } from "@reduxjs/toolkit";

import isOpenCartSidebarReducer from "@/store/isOpenCartSidebar/Slice";
import productsCartReducer from "@/store/productsCart/Slice";

export default configureStore({
  reducer: {
    isOpenCartSidebar: isOpenCartSidebarReducer,
    productsCart: productsCartReducer,
  },
});
