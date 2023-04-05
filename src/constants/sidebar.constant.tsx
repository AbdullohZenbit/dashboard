import {
  IconArrowDown,
  IconArrowUpword,
  IconLogout,
  IconPlus,
  IconSaveOutlined,
  IconSettings,
  IconSupport,
  IconTrash,
} from "../assets";
import { IMenuItem } from "../models/IMenuItem";

export const SIDEBAR_MENU: IMenuItem[] = [
  {
    icon: <IconPlus />,
    path: "/",
    text: "Создать",
  },
  {
    icon: <IconArrowDown />,
    path: "/incoming",
    text: "Входящие (2)",
  },
  {
    icon: <IconArrowUpword />,
    path: "/outgoing",
    text: "Исходящие (3)",
  },
  {
    icon: <IconSaveOutlined />,
    path: "/saved",
    text: "Сохраненные (0)",
  },
  {
    icon: <IconTrash />,
    path: "/deleted",
    text: "Сохраненные (0)",
  },
];

export const SIDEBAR_BOTTOM_MENU: IMenuItem[] = [
  {
    icon: <IconSupport />,
    path: "",
    text: "Тех поддержка:",
    textSecond: "+998 99 999 99 99",
  },
  {
    icon: <IconSettings />,
    path: "",
    text: "Настройки",
  },
  {
    icon: <IconLogout />,
    path: "",
    text: "Выйти",
  },
];
