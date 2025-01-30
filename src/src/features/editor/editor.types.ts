export interface EditorProps {
  id: string;
  content: string;
  isEditable: boolean;
}

export interface EditorState {
  [id: string]: { content: string; savedContent: string };
}
