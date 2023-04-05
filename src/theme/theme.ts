import { createTheme } from "@mui/material";
import { typogrophy } from "./typogrophy";
import { palette } from "./palette";
import { components } from "./components";

export const theme = createTheme({
  typography: typogrophy,
  palette: palette,
  components: components,
});
