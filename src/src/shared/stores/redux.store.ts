import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "@features/auth";
import { documentReducer } from "@features/document";
import { tileReducer } from "@features/editor";
import { documentTableToolbarReducer } from "@features/documentTableToolbar";

export const reduxStore = configureStore({
  reducer: {
    authReducer,
    documentReducer,
    documentTableToolbarReducer,
    tileReducer,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
