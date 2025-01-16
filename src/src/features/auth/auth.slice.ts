import { AuthState } from "@features/auth/auth.types.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@shared/stores";
import { addTokenToStorage, addUserIdToStorage } from "@shared/auth";

const initialAuthState: AuthState = {
  userId: undefined,
  token: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
      addUserIdToStorage(state.userId);
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      addTokenToStorage(state.token);
    },
    signOutUser: (state) => {
      state.userId = undefined;
      state.token = undefined;
    },
  },
});

export const { setUserId, setToken, signOutUser } = authSlice.actions;

export const selectUserId = (state: RootState) => state.authReducer.userId;
export const selectToken = (state: RootState) => state.authReducer.token;

export const authReducer = authSlice.reducer;
