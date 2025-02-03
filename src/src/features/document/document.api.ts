import { DocumentResponse } from "@features/document/document.types.ts";
import { LayoutSize, TileContent, TileLayout } from "@shared/types";

export const getDocumentById = async (documentId: string) => {
  const content: Record<string, TileContent> = {
    "tile-id-1": {
      content: `<h2>Welcome to My Grid</h2><p>This is a beautifully structured tile using <strong>React Grid Layout</strong>.</p>`,
      editorType: "all",
    },
    "tile-id-2": {
      content: `<img src="https://www.shutterstock.com/image-vector/happy-dog-illustration-cool-print-600nw-2278572967.jpg" alt="Placeholder Image" style="width: 100%; height: auto;" />`,
      editorType: "img",
    },
    "tile-id-3": {
      content: `<blockquote><p>"The only limit to our realization of tomorrow is our doubts of today."</p><cite>- Franklin D. Roosevelt</cite></blockquote>`,
      editorType: "blockquote",
    },
    "tile-id-4": {
      content: `<ul><li>✔ Feature 1: Dynamic Layout</li><li>✔ Feature 2: Responsive Grid</li><li>✔ Feature 3: Interactive Content</li></ul>`,
      editorType: "ul",
    },
    "tile-id-5": {
      content: `<form><label for="name">Name:</label><input type="text" id="name" placeholder="Enter your name" /><button type="submit">Submit</button></form>`,
      editorType: "all",
    },
    "tile-id-6": {
      content: `<pre><code>const greeting = "Hello, World!";console.log(greeting);</code></pre>`,
      editorType: "code",
    },
    "tile-id-7": {
      content: `<a href="https://react-grid-layout.timos.design/" target="_blank">React Grid Layout Documentation</a>`,
      editorType: "a",
    },
    "tile-id-8": {
      content: `<table><tr><th>Item</th><th>Price</th></tr><tr><td>React Grid</td><td>$20</td></tr><tr><td>TypeScript</td><td>$25</td></tr></table>`,
      editorType: "table",
    },
  };

  const layouts: Record<LayoutSize, TileLayout[]> = {
    lg: [
      {
        tileId: "tile-id-1",
        xPosition: 0,
        yPosition: 0,
        width: 3,
        height: 3,
      },
      {
        tileId: "tile-id-2",
        xPosition: 3,
        yPosition: 0,
        width: 8,
        height: 6,
      },
      {
        tileId: "tile-id-3",
        xPosition: 11,
        yPosition: 0,
        width: 4,
        height: 3,
      },
      {
        tileId: "tile-id-4",
        xPosition: 0,
        yPosition: 3,
        width: 3,
        height: 2,
      },
      {
        tileId: "tile-id-5",
        xPosition: 0,
        yPosition: 5,
        width: 3,
        height: 1,
      },
      {
        tileId: "tile-id-6",
        xPosition: 11,
        yPosition: 3,
        width: 4,
        height: 3,
      },
      {
        tileId: "tile-id-7",
        xPosition: 0,
        yPosition: 6,
        width: 7,
        height: 3,
      },
      {
        tileId: "tile-id-8",
        xPosition: 7,
        yPosition: 6,
        width: 8,
        height: 3,
      },
    ],
    md: [],
    sm: [],
    xs: [],
    xxs: [],
  };

  return {
    id: documentId,
    title: "Document Title",
    tileLayout: {
      content: content,
      layouts: layouts,
    },
  } as DocumentResponse;

  /*return await sendApiRequest<
              GetDocumentByIdQueryParameters,
              undefined,
              DocumentResponse
            >({
              endpoint: "Document",
              requestMethod: "GET",
              token: getUserToken(),
              parameters: {
                documentId: documentId,
              },
            });*/
};
