import { StarterKit } from "@tiptap/starter-kit";
import { useEditor } from "@tiptap/react";
import { useEffect } from "react";

export const useTile = (id: string, isEditable: boolean) => {
  const extensions = [StarterKit];
  const editor = useEditor({
    extensions,
    editable: isEditable,
  });

  useEffect(() => {
    if (editor) editor.setEditable(isEditable);
  }, [editor, isEditable]);

  return { editor, id };
};
