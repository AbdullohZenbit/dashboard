import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { CheckCircleSvg } from "./svg";

export const IconCheckCircle: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={CheckCircleSvg} viewBox="0 0 18 22" {...props} />;
};
