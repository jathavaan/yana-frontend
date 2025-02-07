import { DocumentResponse } from "@features/document/document.types.ts";
import { LayoutSize, TileContent, TileLayout } from "@shared/types";

export const getDocumentById = async (documentId: string) => {
  const content: Record<string, TileContent> = {
    "tile-id-1": {
      content: `<h1 class="tt-heading">Lorem ipsum dolor sit amet.</h1><p class="tt-p">Praesent ut elit dapibus, vulputate magna a, cursus massa. Morbi sed tortor purus. Pellentesque mauris justo, maximus in malesuada non, mollis at diam. Integer efficitur placerat felis venenatis suscipit. Phasellus mattis sed justo vel molestie. Nullam lectus neque, tincidunt nec consequat sed, porttitor eu neque. Pellentesque fringilla imperdiet nulla non mattis. Duis id lorem dictum, varius augue eget, porttitor enim. Aliquam vulputate iaculis dui, nec euismod sapien. Morbi mi massa, placerat at dui in, varius sodales elit. Vestibulum vel porttitor ipsum, tincidunt tincidunt tellus. Praesent tincidunt semper feugiat. Nam pharetra commodo metus ac ullamcorper.</p><blockquote class="tt-blockquote"><p class="tt-p">Suspendisse tincidunt malesuada ligula at luctus. Ut pulvinar lectus nisl, pulvinar scelerisque mauris egestas vel. Maecenas elit mi, tempus id suscipit eu, elementum vitae tortor. Cras nulla lectus, porta at justo vitae, semper laoreet nisl. Quisque lorem augue, euismod eu dolor sit amet, malesuada consectetur ligula. Phasellus molestie lectus purus, eu vulputate risus cursus ac. Morbi et sodales magna, id cursus dui. Nulla interdum tellus vel convallis hendrerit. In at tellus faucibus, maximus quam sed, lobortis nibh. Sed pretium sapien sed nisl fringilla mollis id non turpis. Nullam facilisis non leo in congue. Integer at nulla vitae lorem venenatis faucibus. Etiam sit amet velit ut dui molestie interdum. Nulla fermentum suscipit mi, non rhoncus massa pharetra mattis.</p></blockquote><p class="tt-p">Duis dui mi, laoreet in lorem ac, mollis ultrices est. Nullam sed tristique metus. Nam bibendum purus et lectus lobortis, non lobortis lectus cursus. Vivamus a sem non odio tempus lacinia vitae et elit. Nunc maximus leo eget est lobortis elementum eu et lorem. Nulla laoreet placerat purus eget consequat. Quisque vel orci condimentum augue dignissim suscipit. Pellentesque eu porttitor diam, at ultrices nunc.</p><pre class="tt-code-block"><code class="language-powershell">dotnet ef database uppdate --startup-project Api --project Persistence --context DbContext</code></pre><p class="tt-p"></p>`,
      editorType: "any",
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
        tileId: "tile-id-1", // Largest tile placed at the top-left
        xPosition: 0,
        yPosition: 0,
        width: 12,
        height: 7,
      },
      {
        tileId: "tile-id-2", // Positioned to the right of tile-id-1
        xPosition: 12,
        yPosition: Infinity,
        width: 8,
        height: 6,
      },
      {
        tileId: "tile-id-3", // Positioned in the top-right corner
        xPosition: 20,
        yPosition: Infinity,
        width: 4,
        height: 3,
      },
      {
        tileId: "tile-id-4", // Below tile-id-3
        xPosition: 20,
        yPosition: Infinity,
        width: 4,
        height: 3,
      },
      {
        tileId: "tile-id-6", // Positioned below tile-id-1
        xPosition: 0,
        yPosition: Infinity,
        width: 6,
        height: 3,
      },
      {
        tileId: "tile-id-7", // Positioned to the right of tile-id-6
        xPosition: 6,
        yPosition: Infinity,
        width: 7,
        height: 3,
      },
      {
        tileId: "tile-id-8", // Positioned below tile-id-2, filling the remaining space
        xPosition: 13,
        yPosition: Infinity,
        width: 7,
        height: 4,
      },
    ],
    md: [
      {
        tileId: "tile-id-1", // Largest tile placed at the top-left
        xPosition: 0,
        yPosition: 0,
        width: 12,
        height: 7,
      },
      {
        tileId: "tile-id-2", // Positioned to the right of tile-id-1
        xPosition: 12,
        yPosition: Infinity,
        width: 8,
        height: 6,
      },
      {
        tileId: "tile-id-3", // Positioned in the top-right corner
        xPosition: 20,
        yPosition: Infinity,
        width: 4,
        height: 3,
      },
      {
        tileId: "tile-id-4", // Below tile-id-3
        xPosition: 20,
        yPosition: Infinity,
        width: 4,
        height: 3,
      },
      {
        tileId: "tile-id-6", // Positioned below tile-id-1
        xPosition: 0,
        yPosition: Infinity,
        width: 6,
        height: 3,
      },
      {
        tileId: "tile-id-7", // Positioned to the right of tile-id-6
        xPosition: 6,
        yPosition: Infinity,
        width: 7,
        height: 3,
      },
      {
        tileId: "tile-id-8", // Positioned below tile-id-2, filling the remaining space
        xPosition: 13,
        yPosition: Infinity,
        width: 7,
        height: 4,
      },
    ],
    sm: [
      {
        tileId: "tile-id-1", // Largest tile placed at the top-left
        xPosition: 0,
        yPosition: 0,
        width: 12,
        height: 7,
      },
      {
        tileId: "tile-id-2", // Positioned to the right of tile-id-1
        xPosition: 12,
        yPosition: Infinity,
        width: 8,
        height: 6,
      },
      {
        tileId: "tile-id-3", // Positioned in the top-right corner
        xPosition: 20,
        yPosition: Infinity,
        width: 4,
        height: 3,
      },
      {
        tileId: "tile-id-4", // Below tile-id-3
        xPosition: 20,
        yPosition: Infinity,
        width: 4,
        height: 3,
      },
      {
        tileId: "tile-id-6", // Positioned below tile-id-1
        xPosition: 0,
        yPosition: Infinity,
        width: 6,
        height: 3,
      },
      {
        tileId: "tile-id-7", // Positioned to the right of tile-id-6
        xPosition: 6,
        yPosition: Infinity,
        width: 7,
        height: 3,
      },
      {
        tileId: "tile-id-8", // Positioned below tile-id-2, filling the remaining space
        xPosition: 13,
        yPosition: Infinity,
        width: 7,
        height: 4,
      },
    ],
    xs: [
      {
        tileId: "tile-id-1", // Largest tile placed at the top-left
        xPosition: 0,
        yPosition: 0,
        width: 12,
        height: 7,
      },
      {
        tileId: "tile-id-2", // Positioned to the right of tile-id-1
        xPosition: 12,
        yPosition: Infinity,
        width: 8,
        height: 6,
      },
      {
        tileId: "tile-id-3", // Positioned in the top-right corner
        xPosition: 20,
        yPosition: Infinity,
        width: 4,
        height: 3,
      },
      {
        tileId: "tile-id-4", // Below tile-id-3
        xPosition: 20,
        yPosition: Infinity,
        width: 4,
        height: 3,
      },
      {
        tileId: "tile-id-6", // Positioned below tile-id-1
        xPosition: 0,
        yPosition: Infinity,
        width: 6,
        height: 3,
      },
      {
        tileId: "tile-id-7", // Positioned to the right of tile-id-6
        xPosition: 6,
        yPosition: Infinity,
        width: 7,
        height: 3,
      },
      {
        tileId: "tile-id-8", // Positioned below tile-id-2, filling the remaining space
        xPosition: 13,
        yPosition: Infinity,
        width: 7,
        height: 4,
      },
    ],
    xxs: [
      {
        tileId: "tile-id-1", // Largest tile placed at the top-left
        xPosition: 0,
        yPosition: 0,
        width: 12,
        height: 7,
      },
      {
        tileId: "tile-id-2", // Positioned to the right of tile-id-1
        xPosition: 12,
        yPosition: Infinity,
        width: 8,
        height: 6,
      },
      {
        tileId: "tile-id-3", // Positioned in the top-right corner
        xPosition: 20,
        yPosition: Infinity,
        width: 4,
        height: 3,
      },
      {
        tileId: "tile-id-4", // Below tile-id-3
        xPosition: 20,
        yPosition: Infinity,
        width: 4,
        height: 3,
      },
      {
        tileId: "tile-id-6", // Positioned below tile-id-1
        xPosition: 0,
        yPosition: Infinity,
        width: 6,
        height: 3,
      },
      {
        tileId: "tile-id-7", // Positioned to the right of tile-id-6
        xPosition: 6,
        yPosition: Infinity,
        width: 7,
        height: 3,
      },
      {
        tileId: "tile-id-8", // Positioned below tile-id-2, filling the remaining space
        xPosition: 13,
        yPosition: Infinity,
        width: 7,
        height: 4,
      },
    ],
    xs: [
      {
        tileId: "tile-id-1", // Largest tile placed at the top-left
        xPosition: 0,
        yPosition: 0,
        width: 12,
        height: 7,
      },
      {
        tileId: "tile-id-2", // Positioned to the right of tile-id-1
        xPosition: 12,
        yPosition: Infinity,
        width: 8,
        height: 6,
      },
      {
        tileId: "tile-id-3", // Positioned in the top-right corner
        xPosition: 20,
        yPosition: Infinity,
        width: 4,
        height: 3,
      },
      {
        tileId: "tile-id-4", // Below tile-id-3
        xPosition: 20,
        yPosition: Infinity,
        width: 4,
        height: 3,
      },
      {
        tileId: "tile-id-6", // Positioned below tile-id-1
        xPosition: 0,
        yPosition: Infinity,
        width: 6,
        height: 3,
      },
      {
        tileId: "tile-id-7", // Positioned to the right of tile-id-6
        xPosition: 6,
        yPosition: Infinity,
        width: 7,
        height: 3,
      },
      {
        tileId: "tile-id-8", // Positioned below tile-id-2, filling the remaining space
        xPosition: 13,
        yPosition: Infinity,
        width: 7,
        height: 4,
      },
    ],
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
