import { TypographyOptions } from "@mui/material/styles/createTypography";

export const typogrophy: TypographyOptions = {
  fontFamily: ["Inter", "Roboto", '"Helvetica"', "Arial", "sans-serif"].join(
    ","
  ),
  fontSize: 16,
  h1: {
    fontSize: 32,
    fontWeight: 700,
  },
  h2: {
    fontSize: 22,
    fontWeight: 700,
  },
  h3: {
    fontSize: 18,
    fontWeight: 500,
  },
  h4: {
    fontSize: 16,
    fontWeight: 500,
  },
  h5: {
    fontSize: 14,
    fontWeight: 700,
  },
  h6: {
    fontSize: 12,
  },
  subtitle1: {
    fontWeight: 500,
    fontSize: 15,
  },
};
