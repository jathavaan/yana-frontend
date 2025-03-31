import { DocumentTableToolbarState } from "@features/documentTableToolbar/documentTableToolbar.types.ts";
import { createSlice } from "@reduxjs/toolkit";

const initialState: DocumentTableToolbarState = {};

export const documentTableToolbarSlice = createSlice({
  name: "documentTableToolbarState",
  initialState: initialState,
  reducers: {},
});

export const _ = documentTableToolbarSlice.actions;
export const documentTableToolbarReducer = documentTableToolbarSlice.reducer;
