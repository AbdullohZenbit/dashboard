import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";
import { SupportSvg } from "./svg";

export const IconSupport: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={SupportSvg} {...props} />;
};
