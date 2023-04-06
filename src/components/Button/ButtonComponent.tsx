import { ButtonProps, Button, Typography } from "@mui/material";
import React, { FC } from "react";
interface IButton extends ButtonProps {
  text: string;
  onClick?: () => {};
}
export const ButtonComponent: FC<IButton> = ({
  text,
  startIcon,
  endIcon,
  color,
}) => {
  return (
    <Button
      color={color}
      variant="contained"
      startIcon={startIcon}
      endIcon={endIcon}
    >
      <Typography variant="h6">{text}</Typography>
    </Button>
  );
};
