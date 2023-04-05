import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";
import { SettingsSvg } from "./svg";

export const IconSettings: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={SettingsSvg} viewBox="0 0 24 24" {...props} />;
};
