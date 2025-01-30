import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import {
  StyledDocumentGrid,
  StyledSection,
} from "@features/document/document.style.ts";
import { Tile } from "@features/tile/tile.tsx";
import { useState } from "react";
import { Button } from "@features/ui/button";

export const Document = () => {
  const [isEditable, setIsEditable] = useState(false);
  return (
    <>
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
        <StyledSection
          key="a"
          data-grid={{
            x: 0,
            y: 2,
            h: 2,
            w: 3,
            static: !isEditable,
          }}
        >
          <Tile id="a" isEditable={isEditable} />
        </StyledSection>
        <Tile id="aaa" isEditable={isEditable} />
        <StyledSection
          key="aa"
          data-grid={{
            x: 3,
            y: 0,
            h: 2,
            w: 3,
            static: !isEditable,
          }}
        >
          <Tile id="aa" isEditable={isEditable} />
        </StyledSection>
        <StyledSection
          key="aaa"
          data-grid={{
            x: 0,
            y: 0,
            h: 2,
            w: 3,
            static: !isEditable,
          }}
        >
          <Tile id="aaa" isEditable={isEditable} />
        </StyledSection>
      </StyledDocumentGrid>
    </>
  );
};
