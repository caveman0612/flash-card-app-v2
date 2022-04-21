import { configureStore } from "@reduxjs/toolkit";
import deckReducer from "./deckSlice";

export default configureStore({
  reducer: {
    data: deckReducer,
  },
});
