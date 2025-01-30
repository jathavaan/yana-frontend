import { TileState } from "@features/tile/tile.types.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@shared/stores";

const initialState: TileState = {};

export const tileSlice = createSlice({
  name: "tile",
  initialState,
  reducers: {
    setTile: (
      state,
      action: PayloadAction<{
        id: string;
        content: string;
        savedContent: string;
      }>,
    ) => {
      const { id, content, savedContent } = action.payload;
      state[id] = { content, savedContent };
    },
    setTileContent: (
      state,
      action: PayloadAction<{ id: string; content: string }>,
    ) => {
      const { id, content } = action.payload;
      if (state[id]) state[id].content = content;
    },
    setSavedTileContent: (
      state,
      action: PayloadAction<{ id: string; savedContent: string }>,
    ) => {
      const { id, savedContent } = action.payload;
      if (state[id]) state[id].savedContent = savedContent;
    },
  },
});

export const { setTile, setTileContent, setSavedTileContent } =
  tileSlice.actions;
export const selectTileContent = (state: RootState, id: string) =>
  state.tileReducer[id]?.content;
export const selectSavedTileContent = (state: RootState, id: string) =>
  state.tileReducer[id]?.savedContent;

export const tileReducer = tileSlice.reducer;
