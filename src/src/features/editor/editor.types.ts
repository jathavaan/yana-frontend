export type EditorType =
  | "all"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "blockquote"
  | "code"
  | "pre"
  | "ul"
  | "ol"
  | "tl"
  | "a"
  | "img"
  | "table";

export interface EditorProps {
  id: string;
  editorType: EditorType;
  content: string;
  isEditable: boolean;
}

export interface EditorState {
  [id: string]: { content: string; savedContent: string };
}
