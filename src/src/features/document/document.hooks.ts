import { DocumentResponse } from "@features/document/document.types.ts";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsEditable,
  toggleIsEditable,
} from "@features/document/document.slice.ts";
import { AppDispatch } from "@shared/stores";

export const useDocument = (documentId: string) => {
  // const { data: document, isLoading, isError } = useDocumentQuery(documentId);
  const document: DocumentResponse = {
    id: documentId,
    title: "Document Title",
    tiles: [
      {
        id: "tile-id-1",
        content: `
      <div>
        <h2>Welcome to My Grid</h2>
        <p>This is a beautifully structured tile using <strong>React Grid Layout</strong>.</p>
      </div>
    `,
        xPosition: 0,
        yPosition: 0,
        width: 3,
        height: 3,
      },
      {
        id: "tile-id-2",
        content: `
      <div>
        <img src="https://via.placeholder.com/150" alt="Placeholder Image" style="width: 100%; height: auto;" />
        <p>Images can be inside the grid too! Look at this cool placeholder.</p>
      </div>
    `,
        xPosition: 3,
        yPosition: 0,
        width: 3,
        height: 3,
      },
      {
        id: "tile-id-3",
        content: `
      <blockquote>
        <p>"The only limit to our realization of tomorrow is our doubts of today."</p>
        <cite>- Franklin D. Roosevelt</cite>
      </blockquote>
    `,
        xPosition: 6,
        yPosition: 0,
        width: 3,
        height: 2,
      },
      {
        id: "tile-id-4",
        content: `
      <ul>
        <li>✔ Feature 1: Dynamic Layout</li>
        <li>✔ Feature 2: Responsive Grid</li>
        <li>✔ Feature 3: Interactive Content</li>
      </ul>
    `,
        xPosition: 0,
        yPosition: 3,
        width: 3,
        height: 2,
      },
      {
        id: "tile-id-5",
        content: `
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    `,
        xPosition: 3,
        yPosition: 3,
        width: 3,
        height: 2,
      },
      {
        id: "tile-id-6",
        content: `
      <div>
        <h3>Code Snippet:</h3>
        <pre>
          <code>
const greet = (name) => console.log("Hello, " + name);
greet("World");
          </code>
        </pre>
      </div>
    `,
        xPosition: 6,
        yPosition: 3,
        width: 3,
        height: 2,
      },
      {
        id: "tile-id-7",
        content: `
      <video width="100%" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `,
        xPosition: 0,
        yPosition: 5,
        width: 6,
        height: 3,
      },
      {
        id: "tile-id-8",
        content: `
      <table border="1" style="width:100%; text-align:center;">
        <tr>
          <th>Item</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>React Grid</td>
          <td>$20</td>
        </tr>
        <tr>
          <td>TypeScript</td>
          <td>$25</td>
        </tr>
      </table>
    `,
        xPosition: 6,
        yPosition: 5,
        width: 3,
        height: 3,
      },
    ],
  };

  const isLoading = false;
  const isError = false;

  const isDocumentEditable = useSelector(selectIsEditable);

  const dispatch = useDispatch<AppDispatch>();
  const onEditDocumentClick = () => {
    dispatch(toggleIsEditable());
  };

  return {
    document,
    isDocumentEditable,
    isLoading,
    isError,
    onEditDocumentClick,
  };
};
