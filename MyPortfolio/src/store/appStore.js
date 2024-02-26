import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
const appStore = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default appStore;
