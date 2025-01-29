import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { StyledDocumentGrid } from "@features/documentGrid/documentGrid.style.ts";

export const DocumentGrid = () => {
  return (
    <StyledDocumentGrid
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 20, md: 10, sm: 6, xs: 4, xxs: 2 }}
      containerPadding={[0, 0]}
      rowHeight={50}
      autoSize={true}
      compactType="vertical"
    >
      <section
        key={1}
        data-grid={{ x: 0, y: 0, w: 2, h: 1, static: false }}
        style={{
          backgroundColor: "lightskyblue",
        }}
      >
        1
      </section>
      <section
        key={2}
        data-grid={{ x: 1, y: 1, w: 3, h: 2, static: false }}
        style={{
          backgroundColor: "lightblue",
        }}
      >
        2
      </section>
      <section
        key={3}
        data-grid={{ x: 0, y: 1, w: 1, h: 2, static: false }}
        style={{
          backgroundColor: "lightsalmon",
        }}
      >
        3
      </section>
      <section
        key={4}
        data-grid={{ x: 2, y: 0, w: 2, h: 1, static: false }}
        style={{
          backgroundColor: "lightcoral",
        }}
      >
        4
      </section>
    </StyledDocumentGrid>
  );
};
