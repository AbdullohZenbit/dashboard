import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";
import { LogoutSvg } from "./svg";

export const IconLogout: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={LogoutSvg} viewBox="0 0 24 24" {...props} />;
};
