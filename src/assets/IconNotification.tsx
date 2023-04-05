import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { NotificationSvg } from "./svg";

export const IconNotification: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={NotificationSvg} viewBox="0 0 24 24" {...props} />;
};
