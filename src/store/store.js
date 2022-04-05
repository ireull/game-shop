import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cartReducer from "./reducers/cartReducer";
import gamesReducer from "./reducers/gamesReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    games: gamesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})