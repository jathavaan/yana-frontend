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
      action: PayloadAction<{ id: string; content: string }>,
    ) => {
      const { id, content } = action.payload;
      state[id] = { content };
    },
    setTileContent: (
      state,
      action: PayloadAction<{ id: string; content: string }>,
    ) => {
      const { id, content } = action.payload;
      if (state[id]) {
        state[id].content = content;
      }
    },
  },
});

export const { setTile, setTileContent } = tileSlice.actions;
export const selectTileContent = (state: RootState, id: string) =>
  state.tileReducer[id]?.content;
export const tileReducer = tileSlice.reducer;
