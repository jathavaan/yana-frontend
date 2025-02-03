import { EditorProps } from "@features/editor/editor.types.ts";
import { useTileEditor } from "@features/editor/editor.hooks.ts";
import { StyledEditorContent } from "@features/editor/editor.style.ts";

export const Editor = ({
  id,
  editorType,
  content,
  isEditable,
}: EditorProps) => {
  const { editor, isEditorSavePending, isEditorSaveError } = useTileEditor(
    id,
    editorType,
    content,
    isEditable,
  );

  return (
    <>
      {isEditorSavePending && <div>Loading...</div>}
      {isEditorSaveError && <div>Error saving tile</div>}
      <StyledEditorContent key={id} editor={editor} />
    </>
  );
};
