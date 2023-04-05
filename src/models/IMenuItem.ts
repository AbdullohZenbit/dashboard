import { ReactNode } from "react";

export interface IMenuItem {
  icon: ReactNode;
  text: string;
  path: string;
  textSecond?: string;
}
