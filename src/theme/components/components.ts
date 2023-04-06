import { Components, Theme } from "@mui/material";

export const components: Components<Omit<Theme, "components">> = {
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        minHeight: "100vh",
        height: "100%",
      },
      body: {
        minWidth: 1140,
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
        boxShadow: "none",
        background: theme.palette.common.white,
      }),
    },
  },
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(3, 3),
        marginTop: theme.spacing(3),
        borderRadius: 12,
      }),
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.common.black,
        fontSize: theme.typography.h4.fontSize,
        fontWeight: 500,
      }),
    },
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 8,
        padding: theme.spacing(1.2, 2),
        boxShadow: "none",
        color: theme.palette.common.white,
      }),
    },
  },

  MuiInputBase: {
    styleOverrides: {
      root: ({ theme }) => ({
        height: 48,
      }),
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
    },
  },
};
