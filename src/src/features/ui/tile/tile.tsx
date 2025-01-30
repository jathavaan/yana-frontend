import { styled } from "@mui/material";

export const Tile = styled("section")<{ isEditable: boolean }>(
  ({ theme, isEditable }) => ({
    backgroundColor: isEditable
      ? theme.palette.primary.main
      : theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    borderRadius: theme.shape.borderRadius,
    padding: 0,
    paddingBottom: theme.spacing(1),
    margin: 0,
    display: "flex",
  }),
);
