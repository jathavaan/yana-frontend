import Document from "@tiptap/extension-document";
import { Extensions } from "@tiptap/react";
import { History } from "@tiptap/extension-history";
import Text from "@tiptap/extension-text";
import Typography from "@tiptap/extension-typography";
import { Subscript } from "@tiptap/extension-subscript";
import { Superscript } from "@tiptap/extension-superscript";
import { Underline } from "@tiptap/extension-underline";
import { Bold } from "@tiptap/extension-bold";
import { Italic } from "@tiptap/extension-italic";
import { Link } from "@tiptap/extension-link";
import { Strike } from "@tiptap/extension-strike";
import Highlight from "@tiptap/extension-highlight";
import { Mention } from "@tiptap/extension-mention";
import Image from "@tiptap/extension-image";
import { Heading } from "@tiptap/extension-heading";
import { Paragraph } from "@tiptap/extension-paragraph";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import { Blockquote } from "@tiptap/extension-blockquote";
import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import { HorizontalRule } from "@tiptap/extension-horizontal-rule";
import TaskList from "@tiptap/extension-task-list";
import { TaskItem } from "@tiptap/extension-task-item";
import { Gapcursor } from "@tiptap/extension-gapcursor";
import { Dropcursor } from "@tiptap/extension-dropcursor";
import { EditorType } from "@shared/types";

export const getEditorExtensions = (type: EditorType): Extensions => {
  const extensions: Extensions = [
    Document,
    History,
    Text.configure({
      HTMLAttributes: {
        class: "tt-text",
      },
    }),
  ];
  const textExtensions: Extensions = [
    // Nodes
    Paragraph.configure({
      HTMLAttributes: {
        class: "tt-p",
      },
    }),

    Typography,
    Mention.configure({
      HTMLAttributes: {
        class: "tt-mention",
      },
    }),
    HorizontalRule.configure({
      HTMLAttributes: {
        class: "tt-horizontal-rule",
      },
    }),

    // Marks
    Bold.configure({
      HTMLAttributes: {
        class: "tt-bold",
      },
    }),
    Highlight.configure({
      HTMLAttributes: {
        class: "tt-highlight",
      },
    }),
    Italic.configure({
      HTMLAttributes: {
        class: "tt-italic",
      },
    }),
    Link.configure({
      HTMLAttributes: {
        class: "tt-link",
      },
    }),
    Strike.configure({
      HTMLAttributes: {
        class: "tt-strike",
      },
    }),
    Subscript.configure({
      HTMLAttributes: {
        class: "tt-subscript",
      },
    }),
    Superscript.configure({
      HTMLAttributes: {
        class: "tt-superscript",
      },
    }),
    Underline.configure({
      HTMLAttributes: {
        class: "tt-underline",
      },
    }),

    // Extensions
    Gapcursor.configure({
      HTMLAttributes: {
        class: "tt-gapcursor",
      },
    }),
    Dropcursor,
  ];

  const tableExtensions: Extensions = [
    Table.configure({
      resizable: true,
      HTMLAttributes: {
        class: "tt-table",
      },
    }),
    TableHeader.configure({
      HTMLAttributes: {
        class: "tt-table-header",
      },
    }),
    TableCell.configure({
      HTMLAttributes: {
        class: "tt-table-cell",
      },
    }),
    TableRow.configure({
      HTMLAttributes: {
        class: "tt-table-row",
      },
    }),
  ];

  const listExtensions: Extensions = [
    ListItem.configure({
      HTMLAttributes: {
        class: "tt-list-item",
      },
    }),
  ];

  const taskListExtensions: Extensions = [
    TaskList.configure({
      HTMLAttributes: {
        class: "tt-task-list",
      },
    }),
    TaskItem.configure({
      HTMLAttributes: {
        class: "tt-task-item",
      },
      nested: true,
    }),
  ];

  const lowlight = createLowlight(all);

  switch (type) {
    case "any":
      extensions.push(
        ...textExtensions,
        ...tableExtensions,
        ...listExtensions,
        ...taskListExtensions,
        Blockquote.configure({
          HTMLAttributes: {
            class: "tt-blockquote",
          },
        }),
        CodeBlockLowlight.configure({
          HTMLAttributes: {
            class: "tt-code-block",
          },
          lowlight: lowlight,
        }),
        Heading.configure({
          HTMLAttributes: {
            class: "tt-heading",
          },
          levels: [1, 2, 3, 4, 5],
        }),
        OrderedList.configure({
          HTMLAttributes: {
            class: "tt-ordered-list",
          },
        }),
        BulletList.configure({
          HTMLAttributes: {
            class: "tt-bullet-list",
          },
        }),
        Image.configure({
          HTMLAttributes: {
            class: "tt-image",
          },
        }),
      );
      break;
    case "h1":
      extensions.push(
        ...textExtensions,
        Heading.configure({
          levels: [1],
          HTMLAttributes: {
            class: "tt-heading",
          },
        }),
      );
      break;
    case "h2":
      extensions.push(
        ...textExtensions,
        Heading.configure({
          levels: [2],
          HTMLAttributes: {
            class: "tt-heading",
          },
        }),
      );
      break;
    case "h3":
      extensions.push(
        ...textExtensions,
        Heading.configure({
          levels: [3],
          HTMLAttributes: {
            class: "tt-heading",
          },
        }),
      );
      break;
    case "h4":
      extensions.push(
        ...textExtensions,
        Heading.configure({
          levels: [4],
          HTMLAttributes: {
            class: "tt-heading",
          },
        }),
      );
      break;
    case "h5":
      extensions.push(
        ...textExtensions,
        Heading.configure({
          levels: [5],
          HTMLAttributes: {
            class: "tt-heading",
          },
        }),
      );
      break;
    case "p":
      extensions.push(
        ...textExtensions,
        Paragraph.configure({
          HTMLAttributes: {
            class: "tt-paragraph",
          },
        }),
      );
      break;
    case "blockquote":
      extensions.push(
        ...textExtensions,
        Blockquote.configure({
          HTMLAttributes: {
            class: "tt-blockquote",
          },
        }),
      );
      break;
    case "code":
      extensions.push(CodeBlockLowlight.configure({ lowlight: lowlight }));
      break;
    case "ul":
      extensions.push(
        ...textExtensions,
        ...listExtensions,
        BulletList.configure({
          HTMLAttributes: {
            class: "tt-bullet-list",
          },
        }),
      );
      break;
    case "ol":
      extensions.push(
        ...textExtensions,
        ...listExtensions,
        OrderedList.configure({
          HTMLAttributes: {
            class: "tt-ordered-list",
          },
        }),
      );
      break;
    case "tl":
      extensions.push(
        ...textExtensions,
        TaskList.configure({
          HTMLAttributes: {
            class: "tt-task-list",
          },
        }),
        TaskItem.configure({
          nested: true,
          HTMLAttributes: {
            class: "tt-task-item",
          },
        }),
      );
      break;
    case "a":
      extensions.push(...textExtensions);
      break;
    case "img":
      extensions.push(
        Image.configure({
          HTMLAttributes: {
            class: "tt-image",
          },
        }),
      );
      break;
    case "table":
      extensions.push(...textExtensions, ...tableExtensions);
  }

  return extensions;
};

export const getEditorClasses = (type: EditorType): string => {
  const classes: string[] = ["tt-editor"];

  switch (type) {
    case "img":
      classes.push("tt-editor-center-content");
      break;
    case "code":
    case "blockquote":
    case "table":
      // classes.push("tt-editor-no-padding");
      break;
  }

  return classes.join(" ");
};

export const calculateNumberOfRows = (contentHeight: number) =>
  Math.ceil(contentHeight / parseInt(import.meta.env.VITE_TILE_HEIGHT));
