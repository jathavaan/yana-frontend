import { useMutation } from "@tanstack/react-query";
import { createDocument } from "@features/documentTableToolbar/documentTableToolbar.api.ts";

export const useCreateDocumentMutation = () =>
  useMutation({
    mutationFn: createDocument,
  });
