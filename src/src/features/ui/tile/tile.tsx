import { styled } from "@mui/material";

export const Tile = styled("section")<{ isEditable: boolean }>(
  ({ theme, isEditable }) => ({
    color: theme.palette.primary.contrastText,
    borderRadius: theme.shape.borderRadius,
    padding: 0,
    paddingBottom: theme.spacing(1),
    margin: 0,
    display: "flex",
    border: `1px dotted ${isEditable ? theme.palette.primary.dark : "transparent"}`,
    "&:hover": {
      backgroundColor: isEditable && theme.palette.primary.main,
    },
  }),
);
