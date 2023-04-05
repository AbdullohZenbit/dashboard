import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";
import { ToolSvg } from "./svg";

export const IconTools: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={ToolSvg} {...props} viewBox="0 0 24 24" />;
};
