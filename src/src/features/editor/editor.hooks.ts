import { Editor, useEditor } from "@tiptap/react";
import { useCallback, useEffect } from "react";
import { AppDispatch, RootState } from "@shared/stores";
import { useDispatch, useSelector } from "react-redux";
import { normalizeHTML } from "@shared/html";
import { useSaveTileContentMutation } from "@features/editor/editor.query.ts";
import { StarterKit } from "@tiptap/starter-kit";
import { Image } from "@tiptap/extension-image";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Typography from "@tiptap/extension-typography";
import {
  selectEditorContent,
  selectSavedEditorContent,
  setEditor,
  setEditorContent,
  setSavedEditorContent,
} from "@features/editor/editor.slice.ts";

export const useTileEditor = (
  id: string,
  initialContent: string,
  isEditable: boolean,
) => {
  const dispatch = useDispatch<AppDispatch>();

  const editorContent = useSelector((state: RootState) =>
    selectEditorContent(state, id),
  );

  const savedEditorContent = useSelector((state: RootState) =>
    selectSavedEditorContent(state, id),
  );

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Table,
      TableCell,
      TableHeader,
      TableRow,
      Typography,
    ],
    content: initialContent,
    editable: isEditable,
    onUpdate: ({ editor }) => onEditorUpdate(editor),
    onBlur: () => {
      if (normalizeHTML(editorContent) === normalizeHTML(savedEditorContent)) {
        return;
      }

      onEditorSave(id);
    },
  });

  const {
    mutate: saveTile,
    isPending: isEditorSavePending,
    isError: isEditorSaveError,
  } = useSaveTileContentMutation(id, editorContent);

  const onEditorUpdate = (editor: Editor) => {
    const content = editor.getHTML();
    dispatch(
      setEditorContent({
        id: id,
        content: content,
      }),
    );
  };

  const onEditorSave = useCallback(
    (tileId: string) => {
      saveTile();
      dispatch(
        setSavedEditorContent({ id: tileId, savedContent: editorContent }),
      );
    },
    [dispatch, saveTile, editorContent],
  );

  useEffect(() => {
    dispatch(
      setEditor({
        id: id,
        content: initialContent,
        savedContent: initialContent,
      }),
    );
  }, [dispatch, id, initialContent]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (normalizeHTML(editorContent) === normalizeHTML(savedEditorContent))
        return;

      onEditorSave(id);
    }, 5000);

    return () => clearTimeout(handler);
  }, [id, onEditorSave, savedEditorContent, editorContent]);

  useEffect(() => {
    if (editor) editor.setEditable(isEditable);
  }, [editor, isEditable]);

  return { editor, isEditorSavePending, isEditorSaveError };
};
