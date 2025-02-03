export type LayoutSize = "lg" | "md" | "sm" | "xs" | "xxs";

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

export interface TileResponse {
  content: Record<string, TileContent>;
  layouts: Record<LayoutSize, TileLayout[]>;
}

export interface TileContent {
  content?: string;
  editorType: EditorType;
}

export interface TileLayout {
  tileId: string;
  xPosition: number;
  yPosition: number;
  width: number;
  height: number;
  minHeight?: number;
  minWidth?: number;
}
