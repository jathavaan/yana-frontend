import { useMutation } from "@tanstack/react-query";
import { saveTile } from "@features/editor/editor.api.ts";

export const useSaveTileContentMutation = (tileId: string, content: string) =>
  useMutation({
    mutationFn: () => saveTile(tileId, content),
  });
