import { StyledEditorContent } from "@features/tile/tile.style.ts";
import { TileProps } from "@features/tile/tile.types.ts";
import { useTile } from "@features/tile/tile.hooks.ts";
import { StyledSection } from "@features/document/document.style.ts";

export const Tile = ({ id, content, isEditable }: TileProps) => {
  const { editor } = useTile(id, content, isEditable);
  return (
    <StyledSection key={id}>
      <StyledEditorContent key={id} editor={editor} />
    </StyledSection>
  );
};
