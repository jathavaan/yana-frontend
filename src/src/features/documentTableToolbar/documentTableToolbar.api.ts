import {
  CreateDocumentBody,
  CreateDocumentResponse,
} from "@features/documentTableToolbar/documentTableToolbar.types.ts";
import { sendApiRequest } from "@shared/axios";

export const createDocument = async (
  documentTitle: string,
): Promise<CreateDocumentResponse> =>
  await sendApiRequest<undefined, CreateDocumentBody, CreateDocumentResponse>({
    endpoint: "/Documents/create",
    requestMethod: "POST",
    body: {
      title: documentTitle,
    },
  });
