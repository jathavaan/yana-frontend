import { DocumentState } from "@features/document/document.types.ts";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@shared/stores";

const initialState: DocumentState = {
  isEditable: false,
};
export const documentSlice = createSlice({
  name: "document",
  initialState: initialState,
  reducers: {
    toggleIsEditable: (state) => {
      state.isEditable = !state.isEditable;
    },
  },
});

export const { toggleIsEditable } = documentSlice.actions;
export const selectIsEditable = (state: RootState) =>
  state.documentReducer.isEditable;

export const documentReducer = documentSlice.reducer;
