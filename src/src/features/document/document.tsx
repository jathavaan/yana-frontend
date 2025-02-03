import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { StyledDocumentGrid } from "@features/document/document.style.ts";
import { Editor } from "@features/editor/editor.tsx";
import { Button } from "@features/ui/button";
import {
  useDocument,
  useDocumentGrid,
} from "@features/document/document.hooks.ts";
import { Tile } from "@features/ui/tile";
import { LayoutSize } from "@shared/types";

export const Document = () => {
  const {
    content,
    layouts,
    isDocumentEditable,
    isLoading,
    isError,
    onEditDocumentClick,
  } = useDocument("document-id");

  const { handleLayoutChange, handleBreakPointChange, onNewTileClick } =
    useDocumentGrid();
  return (
    <>
      {isError && <div>Error</div>}
      {isLoading && <div>Loading</div>}
      <Button
        buttonText={
          isDocumentEditable ? "Disable Edit Mode" : "Enable Edit Mode"
        }
        onClick={() => onEditDocumentClick()}
        sx={{
          mb: 3,
          mt: 3,
        }}
      />
      <Button
        buttonText="Add tile"
        onClick={() => onNewTileClick("code")}
        sx={{
          mb: 3,
        }}
      />
      <StyledDocumentGrid
        breakpoints={{ lg: 1536, md: 1200, sm: 900, xs: 600, xxs: 0 }}
        cols={{ lg: 30, md: 20, sm: 10, xs: 5, xxs: 1 }}
        layouts={layouts}
        containerPadding={[0, 0]}
        rowHeight={106}
        autoSize={true}
        compactType={"vertical"}
        onLayoutChange={(_, allLayouts) => handleLayoutChange(allLayouts)}
        onBreakpointChange={(newBreakpoint) =>
          handleBreakPointChange(newBreakpoint as LayoutSize)
        }
        resizeHandles={["n", "s", "e", "w"]}
      >
        {layouts["lg"].length !== 0 ? (
          layouts["lg"].map((layout) => (
            <Tile key={layout.i} isEditable={isDocumentEditable}>
              <Editor
                id={layout.i}
                editorType={content[layout.i].editorType}
                content={content[layout.i]?.content ?? "N/A"}
                isEditable={isDocumentEditable}
              />
            </Tile>
          ))
        ) : (
          <p>This document is empty!</p>
        )}
      </StyledDocumentGrid>
    </>
  );
};
