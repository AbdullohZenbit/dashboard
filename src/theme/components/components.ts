import { Components, Theme } from "@mui/material";

export const components: Components<Omit<Theme, "components">> = {
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        minHeight: "100vh",
        height: "100%",
      },
      body: {
        minWidth: 1080,
        minHeight: "100vh",
        height: "100%",
      },
      img: {
        maxWidth: "100%",
        verticalAlign: "middle",
      },
      "#root": {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: ({ theme }) => ({
        background: theme.palette.primary.dark,
        width: 256,
      }),
    },
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        background: theme.palette.primary.main,
        borderRadius: 8,
        padding: theme.spacing(1.2, 2),
        boxShadow: "none",
        color: theme.palette.common.white,
      }),
    },
  },
  MuiDrawer: {
    styleOverrides: {
      root: {
        minWidth: 256,
      },
    },
  },
};
