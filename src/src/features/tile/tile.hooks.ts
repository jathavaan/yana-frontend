import { Editor, useEditor } from "@tiptap/react";
import { useCallback, useEffect } from "react";
import { AppDispatch, RootState } from "@shared/stores";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSavedTileContent,
  selectTileContent,
  setSavedTileContent,
  setTile,
  setTileContent,
} from "@features/tile/tile.slice.ts";
import { useSaveTileMutation } from "@features/tile/tile.query.ts";
import { normalizeHTML } from "@shared/html";
import { StarterKit } from "@tiptap/starter-kit";
import { Image } from "@tiptap/extension-image";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Typography from "@tiptap/extension-typography";

export const useTile = (
  id: string,
  initialContent: string,
  isEditable: boolean,
) => {
  const dispatch = useDispatch<AppDispatch>();

  const tileContent = useSelector((state: RootState) =>
    selectTileContent(state, id),
  );

  const savedTileContent = useSelector((state: RootState) =>
    selectSavedTileContent(state, id),
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
    onUpdate: ({ editor }) => onTileUpdate(editor),
    onBlur: () => {
      if (normalizeHTML(tileContent) === normalizeHTML(savedTileContent)) {
        return;
      }

      onTileSave(id);
    },
  });

  const {
    mutate: saveTile,
    isPending: isTileSavePending,
    isError: isTileSaveError,
  } = useSaveTileMutation(id, tileContent);

  const onTileUpdate = (editor: Editor) => {
    const content = editor.getHTML();
    dispatch(
      setTileContent({
        id: id,
        content: content,
      }),
    );
  };

  const onTileSave = useCallback(
    (tileId: string) => {
      saveTile();
      dispatch(setSavedTileContent({ id: tileId, savedContent: tileContent }));
    },
    [dispatch, saveTile, tileContent],
  );

  useEffect(() => {
    dispatch(
      setTile({
        id: id,
        content: initialContent,
        savedContent: initialContent,
      }),
    );
  }, [dispatch, id, initialContent]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (normalizeHTML(tileContent) === normalizeHTML(savedTileContent))
        return;

      onTileSave(id);
    }, 5000);

    return () => clearTimeout(handler);
  }, [id, onTileSave, savedTileContent, tileContent]);

  useEffect(() => {
    if (editor) editor.setEditable(isEditable);
  }, [editor, isEditable]);

  return { editor, isTileSavePending, isTileSaveError };
};
