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
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import { HorizontalRule } from "@tiptap/extension-horizontal-rule";
import TaskList from "@tiptap/extension-task-list";
import { TaskItem } from "@tiptap/extension-task-item";
import { Gapcursor } from "@tiptap/extension-gapcursor";
import { Dropcursor } from "@tiptap/extension-dropcursor";
import { EditorType } from "@shared/types";

export const getEditorExtensions = (type: EditorType): Extensions => {
  const extensions: Extensions = [Document, History];
  const textExtensions: Extensions = [
    // Nodes
    Paragraph,
    Text,
    Typography,
    Mention,
    HorizontalRule,

    // Marks
    Bold,
    Highlight,
    Italic,
    Link,
    Strike,
    Subscript,
    Superscript,
    Underline,

    // Extensions
    Gapcursor,
    Dropcursor,
  ];

  const lowlight = createLowlight(all);

  switch (type) {
    case "all":
      extensions.push(
        ...textExtensions,
        Blockquote,
        CodeBlockLowlight.configure({ lowlight: lowlight }),
        Heading.configure({
          levels: [1, 2, 3, 4, 5],
        }),
        ListItem,
        OrderedList,
        BulletList,
        TaskList,
        TaskItem,
        Table,
        TableHeader,
        TableCell,
        TableRow,
        Image,
      );
      break;
    case "h1":
      extensions.push(...textExtensions, Heading.configure({ levels: [1] }));
      break;
    case "h2":
      extensions.push(...textExtensions, Heading.configure({ levels: [2] }));
      break;
    case "h3":
      extensions.push(...textExtensions, Heading.configure({ levels: [3] }));
      break;
    case "h4":
      extensions.push(...textExtensions, Heading.configure({ levels: [4] }));
      break;
    case "h5":
      extensions.push(...textExtensions, Heading.configure({ levels: [5] }));
      break;
    case "p":
      extensions.push(...textExtensions, Paragraph);
      break;
    case "blockquote":
      extensions.push(...textExtensions, Blockquote);
      break;
    case "code":
      extensions.push(CodeBlockLowlight.configure({ lowlight: lowlight }));
      break;
    case "ul":
      extensions.push(...textExtensions, BulletList, ListItem);
      break;
    case "ol":
      extensions.push(...textExtensions, OrderedList, ListItem);
      break;
    case "tl":
      extensions.push(
        ...textExtensions,
        TaskList,
        TaskItem.configure({
          nested: true,
        }),
      );
      break;
    case "img":
      extensions.push(Image);
      break;
    case "table":
      extensions.push(
        ...textExtensions,
        Table,
        TableCell,
        TableHeader,
        TableRow,
      );
  }

  return extensions;
};
