export interface TileProps {
  id: string;
  content: string;
  isEditable: boolean;
}

export interface TileState {
  [id: string]: { content: string };
}
