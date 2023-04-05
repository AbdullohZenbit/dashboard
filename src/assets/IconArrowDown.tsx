import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";
import { ArrowDown } from "./svg";

export const IconArrowDown: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={ArrowDown} {...props} />;
};
