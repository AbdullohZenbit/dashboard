import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { ArrowUpword } from "./svg";

export const IconArrowUpword: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={ArrowUpword} {...props} />;
};
