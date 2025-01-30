import { styled } from "@mui/material";
import { EditorContent } from "@tiptap/react";

export const StyledEditorContent = styled(EditorContent)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: theme.shape.borderRadius,
  padding: 0,
  display: "flex",
  height: "100%",
  width: "100%",
  "& .ProseMirror": {
    outline: "none",
    height: "100%",
    width: "100%",
    padding: theme.spacing(1),
    color: theme.palette.primary.contrastText,
    overflow: "auto",
    scrollbarWidth: "thin",
    scrollbarColor: `${theme.palette.primary.dark} transparent`,
  },
}));
