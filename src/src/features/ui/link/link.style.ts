import { Link, styled } from "@mui/material";

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.grey[700],
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
    textDecorationColor: theme.palette.grey[700],
  },
}));
