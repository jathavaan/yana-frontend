import { styled } from "@mui/material";

export const Tile = styled("section")<{ isEditable: boolean }>(
  ({ theme, isEditable }) => ({
    color: theme.palette.primary.contrastText,
    borderRadius: theme.shape.borderRadius,
    margin: 0,
    border: `1px solid ${isEditable ? theme.palette.primary.dark : "transparent"}`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    "&:hover": {
      backgroundColor: isEditable && theme.palette.primary.main,
    },
  }),
);
