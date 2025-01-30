import { StarterKit } from "@tiptap/starter-kit";
import { useEditor } from "@tiptap/react";
import { useEffect } from "react";

export const useTile = (id: string, content: string, isEditable: boolean) => {
  const extensions = [StarterKit];
  const editor = useEditor({
    extensions: extensions,
    content: content,
    editable: isEditable,
  });

  useEffect(() => {
    if (editor) editor.setEditable(isEditable);
  }, [editor, isEditable]);

  return { editor, id };
};
