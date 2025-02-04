import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@shared/stores";
import { EditorState } from "@features/editor/editor.types.ts";

const initialState: EditorState = {};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setEditor: (
      state,
      action: PayloadAction<{
        id: string;
        content?: string;
        savedContent?: string;
      }>,
    ) => {
      const { id, content, savedContent } = action.payload;
      state[id] = { content, savedContent };
    },
    setEditorContent: (
      state,
      action: PayloadAction<{ id: string; content: string }>,
    ) => {
      const { id, content } = action.payload;
      if (state[id]) state[id].content = content;
    },
    setSavedEditorContent: (
      state,
      action: PayloadAction<{ id: string; savedContent?: string }>,
    ) => {
      const { id, savedContent } = action.payload;
      if (state[id]) state[id].savedContent = savedContent;
    },
  },
});

export const { setEditor, setEditorContent, setSavedEditorContent } =
  editorSlice.actions;
export const selectEditorContent = (state: RootState, id: string) =>
  state.tileReducer[id]?.content;
export const selectSavedEditorContent = (state: RootState, id: string) =>
  state.tileReducer[id]?.savedContent;

export const tileReducer = editorSlice.reducer;
