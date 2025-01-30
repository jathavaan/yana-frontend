import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { StyledDocumentGrid } from "@features/document/document.style.ts";
import { Editor } from "@features/editor/editor.tsx";
import { Button } from "@features/ui/button";
import { useDocument } from "@features/document/document.hooks.ts";
import { Tile } from "@features/ui/tile";

export const Document = () => {
  const {
    document,
    isDocumentEditable,
    isLoading,
    isError,
    onEditDocumentClick,
  } = useDocument("document-id");
  return (
    <>
      {isError && <div>Error</div>}
      {isLoading && <div>Loading</div>}
      <Button
        buttonText={
          isDocumentEditable ? "Disable Edit Mode" : "Enable Edit Mode"
        }
        onClick={() => onEditDocumentClick()}
      />
      <StyledDocumentGrid
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 20, md: 10, sm: 6, xs: 4, xxs: 2 }}
        containerPadding={[0, 0]}
        rowHeight={106}
        autoSize={true}
        compactType={null}
      >
        {document?.tiles.map((tile) => (
          <Tile
            key={tile.id}
            data-grid={{
              x: tile.xPosition,
              y: tile.yPosition,
              h: tile.height,
              w: tile.width,
              static: !isDocumentEditable,
            }}
            isEditable={isDocumentEditable}
          >
            <Editor
              id={tile.id}
              content={tile.content}
              isEditable={isDocumentEditable}
            />
          </Tile>
        ))}
      </StyledDocumentGrid>
    </>
  );
};
