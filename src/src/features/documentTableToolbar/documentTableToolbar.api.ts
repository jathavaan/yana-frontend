import {
  CreateDocumentBody,
  CreateDocumentResponse,
} from "@features/documentTableToolbar/documentTableToolbar.types.ts";
import { sendApiRequest } from "@shared/axios";
import { getUserToken } from "@shared/auth";

export const createDocument = async (
  documentTitle: string,
): Promise<CreateDocumentResponse> =>
  await sendApiRequest<undefined, CreateDocumentBody, CreateDocumentResponse>({
    endpoint: "/Documents/create",
    token: getUserToken(),
    requestMethod: "POST",
    body: {
      title: documentTitle,
      tags: [],
    },
  });
