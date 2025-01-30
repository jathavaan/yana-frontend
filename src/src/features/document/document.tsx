import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import {
  StyledDocumentGrid,
  StyledSection,
} from "@features/document/document.style.ts";
import { Tile } from "@features/tile/tile.tsx";
import { useState } from "react";
import { Button } from "@features/ui/button";
import { useDocument } from "@features/document/document.hooks.ts";

export const Document = () => {
  const [isEditable, setIsEditable] = useState(false);
  const { document, isLoading, isError } = useDocument("document-id");
  return (
    <>
      {isError && <div>Error</div>}
      {isLoading && <div>Loading</div>}
      <Button
        buttonText={isEditable ? "Disable Edit Mode" : "Enable Edit Mode"}
        onClick={() => setIsEditable(!isEditable)}
      />
      <StyledDocumentGrid
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 20, md: 10, sm: 6, xs: 4, xxs: 2 }}
        containerPadding={[0, 0]}
        rowHeight={106}
        autoSize={true}
        compactType="vertical"
      >
        {document?.tiles.map((tile) => (
          <StyledSection
            key={tile.id}
            data-grid={{
              x: tile.xPosition,
              y: tile.yPosition,
              h: tile.height,
              w: tile.width,
              static: !isEditable,
            }}
          >
            <Tile id={tile.id} isEditable={isEditable} />
          </StyledSection>
        ))}
      </StyledDocumentGrid>
    </>
  );
};
