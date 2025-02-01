export type LayoutSize = "lg" | "md" | "sm" | "xs" | "xxs";

export interface TileResponse {
  layouts: Record<LayoutSize, Tile[]>;
}

export interface Tile {
  id: string;
  content: string;
  xPosition: number;
  yPosition: number;
  width: number;
  height: number;
}
