import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";
import { ClearIconSvg } from "./svg";

export const IconClear: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={ClearIconSvg} viewBox="0 0 18 22" {...props} />;
};
