import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";
import { TrashIconSvg } from "./svg";

export const IconTrash: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={TrashIconSvg} />;
};
