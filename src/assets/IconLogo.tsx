import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { LogoSvg } from "./svg";

export const IconLogo: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={LogoSvg} {...props} />;
};
