import { styled } from "@mui/material";
import { EditorContent } from "@tiptap/react";

export const StyledEditorContent = styled(EditorContent)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  borderRadius: theme.shape.borderRadius,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  flexGrow: "unset !important",
  minHeight: 0,
  width: "100%",
  maxHeight: "auto",
  overflow: "visible",
  "& .tt-editor": {
    display: "flex",
    padding: theme.spacing(0.8),
    flexDirection: "column",
    flexGrow: 1,
    width: "100%",
    outline: "none",
    color: theme.palette.primary.contrastText,
    scrollbarWidth: "thin",
    scrollbarColor: `${theme.palette.primary.dark} transparent`,
  },
  "& .tt-editor-no-padding": {
    padding: 0,
  },
  "& .tt-editor-center-content": {
    justifyContent: "center",
    alignItems: "center",
  },

  "& .tt-text": {
    fontSize: "1rem",
  },
  "& .tt-bold": {
    fontWeight: "bold",
  },
  "& .tt-italic": {
    fontStyle: "italic",
  },
  "& .tt-underline": {
    textDecoration: "underline",
  },
  "& .tt-strike": {
    textDecoration: "line-through",
  },
  "& .tt-subscript": {
    fontSize: "0.75em",
    verticalAlign: "sub",
  },
  "& .tt-superscript": {
    fontSize: "0.75em",
    verticalAlign: "super",
  },
  "& .tt-highlight": {
    backgroundColor: theme.palette.secondary.light,
    padding: "2px 4px",
    borderRadius: "4px",
  },
  "& .tt-link": {
    color: theme.palette.primary.contrastText,
    textDecoration: "underline",
    cursor: "pointer",
  },
  "& .tt-blockquote": {
    margin: 0,
    borderLeft: `2px solid ${theme.palette.text.secondary}`,
    marginLeft: theme.spacing(2),
    paddingLeft: theme.spacing(1),
    fontStyle: "italic",
    color: theme.palette.text.secondary,
  },
  "& .tt-code-block": {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.contrastText,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    fontFamily: "monospace",
    overflowX: "auto",
  },
  "& .tt-heading": {
    fontWeight: "bold",
  },
  "& .tt-ordered-list": {
    listStyleType: "decimal",
    paddingLeft: theme.spacing(2),
    margin: 0,
  },
  "& .tt-bullet-list": {
    listStyleType: "disc",
    paddingLeft: theme.spacing(2),
    margin: 0,
  },
  "& .tt-list-item": {
    // marginBottom: theme.spacing(2),
  },
  "& .tt-p": {
    margin: `${theme.spacing(0.4)} 0`,
  },
  "& .tt-bullet-list .tt-list-item:first-of-type .tt-p": {
    marginTop: 0,
  },
  "& .tt-bullet-list .tt-list-item:last-of-type .tt-p": {
    marginBottom: 0,
  },
  "& .tt-task-list": {
    paddingLeft: theme.spacing(2),
  },
  "& .tt-task-item": {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
  },
  "& .tt-horizontal-rule": {
    border: "none",
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: theme.spacing(2, 0),
  },
  "& .tt-image": {
    maxHeight: "100%",
    height: "100%",
    width: "100%",
    borderRadius: theme.shape.borderRadius,
  },
  "& .tt-table": {
    borderCollapse: "collapse",
    width: "100%",
    borderRadius: theme.shape.borderRadius,
  },
  "& .tt-table-header": {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    fontWeight: "bold",
    padding: theme.spacing(1),
  },
  "& .tt-table-header:first-of-type": {
    borderTopLeftRadius: theme.shape.borderRadius,
  },
  "& .tt-table-header:last-of-type": {
    borderTopRightRadius: theme.shape.borderRadius,
  },
  "& .tt-table-cell": {
    padding: theme.spacing(1),
  },
  "& .tt-table-row:nth-of-type(even)": {
    backgroundColor: theme.palette.grey[200],
  },
  "& .tt-table-row:nth-of-type(odd)": {
    backgroundColor: theme.palette.grey[300],
  },
  "& .tt-table-row:last-of-type td:first-of-type": {
    borderBottomLeftRadius: theme.shape.borderRadius,
  },
  "& .tt-table-row:last-of-type td:last-of-type": {
    borderBottomRightRadius: theme.shape.borderRadius,
  },
  "& .tt-gapcursor": {},
}));

// TODO: Create a bubble menu and menu for new line/block
