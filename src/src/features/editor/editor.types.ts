import { EditorType } from "@shared/types";

export interface EditorProps {
  id: string;
  editorType: EditorType;
  content: string;
  isEditable: boolean;
}

export interface EditorState {
  [id: string]: { content: string; savedContent: string };
}
