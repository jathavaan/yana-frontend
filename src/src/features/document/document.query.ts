import { useQuery } from "@tanstack/react-query";
import { getDocumentById } from "@features/document/document.api.ts";

export const useDocumentQuery = (documentId: string) =>
  useQuery({
    queryKey: ["document", documentId],
    queryFn: () => getDocumentById(documentId),
  });
