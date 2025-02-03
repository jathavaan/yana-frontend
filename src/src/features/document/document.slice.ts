import { DocumentState } from "@features/document/document.types.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@shared/stores";
import { Layout, Layouts } from "react-grid-layout";
import { LayoutSize, TileContent, TileLayout } from "@shared/types";
import {
  createReactGridLayouts,
  setLayoutEditMode,
} from "@features/document/document.utils.ts";

const initialState: DocumentState = {
  layoutSize: undefined,
  content: {},
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
    setTileLayout: (
      state,
      action: PayloadAction<{
        layouts: Record<LayoutSize, TileLayout[]>;
        content: Record<string, TileContent>;
      }>,
    ) => {
      const { layouts, content } = action.payload;
      state.layouts = createReactGridLayouts(layouts);

      state.layouts["lg"].map((layout) => {
        state.content[layout.i] = content[layout.i];
      });
    },
    setTileLayoutOnLayoutChange: (state, action: PayloadAction<Layouts>) => {
      state.layouts = action.payload;
    },
    addTile: (
      state,
      action: PayloadAction<{ tile: Layout; content: TileContent }>,
    ) => {
      const { tile, content } = action.payload;
      state.layouts["lg"].push(tile);
      state.layouts["md"].push(tile);
      state.layouts["sm"].push(tile);
      state.layouts["xs"].push(tile);
      state.layouts["xxs"].push(tile);
      state.content[tile.i] = content;
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
    setIsEditable: (state, action: PayloadAction<boolean>) => {
      state.isEditable = action.payload;
      state.layouts = setLayoutEditMode(state.layouts, state.isEditable);
    },
  },
});

export const {
  setLayoutSize,
  setTileLayout,
  setTileLayoutOnLayoutChange,
  addTile,
  removeTile,
  toggleIsEditable,
  setIsEditable,
} = documentSlice.actions;

export const selectLayouts = (state: RootState) =>
  state.documentReducer.layouts;
export const selectContent = (state: RootState) =>
  state.documentReducer.content;
export const selectLayoutSize = (state: RootState) =>
  state.documentReducer.layoutSize;
export const selectTileLayout = (state: RootState, size: LayoutSize) =>
  state.documentReducer.layouts[size];
export const selectIsEditable = (state: RootState) =>
  state.documentReducer.isEditable;

export const documentReducer = documentSlice.reducer;
