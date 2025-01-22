import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "@features/auth";

export const reduxStore = configureStore({ reducer: { authReducer } });

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
