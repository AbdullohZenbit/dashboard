import { Box, Stack, styled } from "@mui/material";

export const HeaderContainer = styled(Stack)(({ theme }) => ({
  height: 88,
  alignItems: "center",
  justifyContent: "space-between",
  background: theme.palette.common.white,
  boxShadow: "inset 0px -1px 0px rgba(0, 0, 0, 0.08)",
  padding: theme.spacing(0, 4),
}));

export const WalletContainer = styled(Box)(({ theme }) => ({
  height: 40,
  width: 40,
  borderRadius: 8,
  background: theme.palette.secondary.main,
  padding: 6,
}));
