import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";
import { PlusSvg } from "./svg";

export const IconPlus: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={PlusSvg} {...props} />;
};
