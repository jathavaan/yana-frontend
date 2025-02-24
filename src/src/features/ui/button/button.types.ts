﻿import { ButtonProps as MuiButtonProps } from "@mui/material";

export interface ButtonProps extends MuiButtonProps {
  buttonText: string;
  isLoading?: boolean;
}
