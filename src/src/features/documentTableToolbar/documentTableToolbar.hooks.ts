import { useCreateDocumentMutation } from "@features/documentTableToolbar/documentTableToolbar.query.ts";

export const useDocumentTableToolbar = () => {
  const { mutate, isError, isPending } = useCreateDocumentMutation();
  const onCreateDocumentClick = () => {
    mutate("Untitled document");
  };

  return { isPending, onCreateDocumentClick };
};
