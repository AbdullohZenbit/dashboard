import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";
import { SelectArrowDown } from "./svg";

export const IconSelectDown: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={SelectArrowDown} {...props} />;
};
