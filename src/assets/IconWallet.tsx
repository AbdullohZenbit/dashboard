import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";
import { WalletSvg } from "./svg";

export const IconWallet: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={WalletSvg} viewBox="0 0 24 24" {...props} />;
};
