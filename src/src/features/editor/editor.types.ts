export type EditorType =
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
  | "li"
  | "a"
  | "img"
  | "table"
  | "tr"
  | "th"
  | "td";

export interface EditorProps {
  id: string;
  content: string;
  isEditable: boolean;
}

export interface EditorState {
  [id: string]: { content: string; savedContent: string };
}
