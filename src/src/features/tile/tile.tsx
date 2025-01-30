import { StyledEditorContent } from "@features/tile/tile.style.ts";
import { TileProps } from "@features/tile/tile.types.ts";
import { useTile } from "@features/tile/tile.hooks.ts";

export const Tile = ({ id, content, isEditable }: TileProps) => {
  const { editor, isTileSavePending, isTileSaveError } = useTile(
    id,
    content,
    isEditable,
  );
  return (
    <>
      {isTileSavePending && <div>Loading...</div>}
      {isTileSaveError && <div>Error saving tile</div>}
      <StyledEditorContent key={id} editor={editor} />
    </>
  );
};
