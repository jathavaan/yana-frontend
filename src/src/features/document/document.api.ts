import { sendApiRequest } from "@shared/axios";
import {
  DocumentResponse,
  GetDocumentByIdQueryParameters,
} from "@features/document/document.types.ts";
import { getUserToken } from "@shared/auth";

export const getDocumentById = async (documentId: string) => {
  return await sendApiRequest<
    GetDocumentByIdQueryParameters,
    undefined,
    DocumentResponse
  >({
    endpoint: "Document",
    requestMethod: "GET",
    token: getUserToken(),
    parameters: {
      documentId: documentId,
    },
  });
};
