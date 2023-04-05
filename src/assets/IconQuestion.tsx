import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";
import { QuestionSvg } from "./svg";

export const IconQuestion: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={QuestionSvg} viewBox="0 0 24 24" {...props} />;
};
