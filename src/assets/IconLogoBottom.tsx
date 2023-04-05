import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { LogoBottomSvg } from "./svg";

export const IconLogoBottom: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={LogoBottomSvg} {...props} />;
};
