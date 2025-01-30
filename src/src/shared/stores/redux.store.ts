import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "@features/auth";
import { documentReducer } from "@features/document";

export const reduxStore = configureStore({
  reducer: { authReducer, documentReducer },
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
