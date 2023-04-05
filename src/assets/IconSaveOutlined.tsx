import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { SaveOutlinedSvg } from "./svg";

export const IconSaveOutlined: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={SaveOutlinedSvg} {...props} />;
};
