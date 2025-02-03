import { LayoutSize, TileContent, TileResponse } from "@shared/types";
import { Layouts } from "react-grid-layout";

export interface GetDocumentByIdQueryParameters {
  documentId: string;
}

export interface DocumentResponse {
  id: string;
  title: string;
  tileLayout: TileResponse;
}

export interface DocumentState {
  layoutSize?: LayoutSize;
  content: Record<string, TileContent>;
  layouts: Layouts;
  isEditable: boolean;
}
