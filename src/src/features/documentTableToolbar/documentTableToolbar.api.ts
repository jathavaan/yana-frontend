import {
  CreateDocumentBody,
  CreateDocumentQueryParameters,
  CreateDocumentResponse,
} from "@features/documentTableToolbar/documentTableToolbar.types.ts";
import { sendApiRequest } from "@shared/axios";

export const createDocument = async (
  documentTitle: string,
): Promise<CreateDocumentResponse> =>
  await sendApiRequest<
    CreateDocumentQueryParameters,
    CreateDocumentBody,
    CreateDocumentResponse
  >({
    endpoint: "", // TODO: Fill out correct endpoint
    requestMethod: "POST",
    parameters: {},
    body: {
      title: documentTitle,
    },
  });
