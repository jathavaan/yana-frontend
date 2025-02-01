import { DocumentState } from "@features/document/document.types.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@shared/stores";
import { Layout, Layouts } from "react-grid-layout";
import { LayoutSize } from "@shared/types";
import { setLayoutEditMode } from "@features/document/document.utils.ts";

const initialState: DocumentState = {
  layoutSize: undefined,
  layouts: {
    lg: [],
    md: [],
    sm: [],
    xs: [],
    xxs: [],
  },
  isEditable: false,
};

export const documentSlice = createSlice({
  name: "document",
  initialState: initialState,
  reducers: {
    setLayoutSize: (state, action: PayloadAction<LayoutSize>) => {
      state.layoutSize = action.payload;
    },
    setTileLayout: (state, action: PayloadAction<Layouts>) => {
      state.layouts = action.payload;
    },
    addTile: (
      state,
      action: PayloadAction<{ size: LayoutSize; tile: Layout }>,
    ) => {
      const { size, tile } = action.payload;
      state.layouts[size].push(tile);
    },
    removeTile: (state, action: PayloadAction<string>) => {
      state.layouts["lg"] = state.layouts["lg"].filter(
        (tile) => tile.i !== action.payload,
      );

      state.layouts["md"] = state.layouts["md"].filter(
        (tile) => tile.i !== action.payload,
      );

      state.layouts["sm"] = state.layouts["sm"].filter(
        (tile) => tile.i !== action.payload,
      );

      state.layouts["xs"] = state.layouts["xs"].filter(
        (tile) => tile.i !== action.payload,
      );

      state.layouts["xxs"] = state.layouts["xxs"].filter(
        (tile) => tile.i !== action.payload,
      );
    },
    toggleIsEditable: (state) => {
      state.isEditable = !state.isEditable;
      state.layouts = setLayoutEditMode(state.layouts, state.isEditable);
    },
  },
});

export const {
  setLayoutSize,
  setTileLayout,
  addTile,
  removeTile,
  toggleIsEditable,
} = documentSlice.actions;

export const selectLayouts = (state: RootState) =>
  state.documentReducer.layouts;
export const selectLayoutSize = (state: RootState) =>
  state.documentReducer.layoutSize;
export const selectTileLayout = (state: RootState, size: LayoutSize) =>
  state.documentReducer.layouts[size];
export const selectIsEditable = (state: RootState) =>
  state.documentReducer.isEditable;

export const documentReducer = documentSlice.reducer;
