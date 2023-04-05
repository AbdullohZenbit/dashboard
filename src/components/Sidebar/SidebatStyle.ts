import { Box, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const SidebarHeader = styled(Box)(({ theme }) => ({
  height: 88,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: " inset 0px -1px 0px rgba(255, 255, 255, 0.1)",
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.common.white,
  height: 56,
  width: "100%",
  position: "relative",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 2),
  display: "flex",
  alignItems: "center",
  h6: {
    marginLeft: 14,
  },
  "&:hover , &.active": {
    background: "rgba(255, 255, 255, 0.1)",
    transition: "all ease 0.5s",
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: 0,
      bottom: 0,
      width: 4,
      background: theme.palette.common.white,
    },
  },
}));
