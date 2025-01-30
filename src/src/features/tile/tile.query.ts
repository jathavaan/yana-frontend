import { useMutation } from "@tanstack/react-query";
import { saveTile } from "@features/tile/tile.api.ts";

export const useSaveTileMutation = (tileId: string, content: string) =>
  useMutation({
    mutationFn: () => saveTile(tileId, content),
  });
