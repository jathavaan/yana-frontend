import { TileResponse } from "@shared/types";

export interface GetDocumentByIdQueryParameters {
  documentId: string;
}

export interface DocumentResponse {
  id: string;
  title: string;
  tiles: TileResponse[];
}

export interface DocumentState {
  isEditable: boolean;
}
