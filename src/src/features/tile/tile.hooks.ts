import { StarterKit } from "@tiptap/starter-kit";
import { Editor, useEditor } from "@tiptap/react";
import { useEffect } from "react";
import { AppDispatch, RootState } from "@shared/stores";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTileContent,
  setTile,
  setTileContent,
} from "@features/tile/tile.slice.ts";

export const useTile = (
  id: string,
  initialContent: string,
  isEditable: boolean,
) => {
  const dispatch = useDispatch<AppDispatch>();
  const tileContent = useSelector((state: RootState) =>
    selectTileContent(state, id),
  );

  const onTileUpdate = (editor: Editor) => {
    const content = editor.getHTML();
    dispatch(
      setTileContent({
        id: id,
        content: content,
      }),
    );
  };

  const extensions = [StarterKit];
  const editor = useEditor({
    extensions: extensions,
    content: initialContent,
    editable: isEditable,
    onUpdate: ({ editor }) => onTileUpdate(editor),
  });

  useEffect(() => {
    dispatch(
      setTile({
        id: id,
        content: initialContent,
      }),
    );
  }, [dispatch, id, initialContent]);

  useEffect(() => {
    if (editor) editor.setEditable(isEditable);
  }, [editor, isEditable]);

  useEffect(() => {
    const handler = setTimeout(() => {
      console.log(tileContent);
    }, 1500);

    return () => clearTimeout(handler);
  }, [tileContent]);

  return { editor, id };
};
