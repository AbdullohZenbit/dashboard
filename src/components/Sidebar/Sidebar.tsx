import { Box, Divider, Stack, Typography } from "@mui/material";
import { useSidebarHook } from "../../hooks/sidebarHook";
import {
  SIDEBAR_BOTTOM_MENU,
  SIDEBAR_MENU,
} from "../../constants/sidebar.constant";
import { SidebarHeader, StyledLink, StyledSidebar } from "./SidebatStyle";
import { useLocation } from "react-router-dom";

export const Sidebar = () => {
  const width = useSidebarHook();
  const { pathname } = useLocation();

  return (
    <StyledSidebar
      variant="persistent"
      sx={width < 768 ? { display: "none" } : {}}
      open={width > 768 && true}
    >
      <SidebarHeader>
        <Typography color="common.white" variant="h1">
          Logo
        </Typography>
        <Divider />
      </SidebarHeader>
      <Stack height="100%" py={2} spacing={1} justifyContent="space-between">
        <Box>
          {SIDEBAR_MENU.map(({ icon, path, text }) => {
            return (
              <StyledLink
                className={path === pathname ? "active" : ""}
                to={path}
              >
                {icon}
                <Typography variant="subtitle1">{text}</Typography>
              </StyledLink>
            );
          })}
        </Box>
        <Box>
          {SIDEBAR_BOTTOM_MENU.map(({ icon, path, text, textSecond }) => {
            return (
              <StyledLink
                className={path === pathname ? "active" : ""}
                to={path}
              >
                {icon}
                <Box>
                  <Typography variant="subtitle1">{text}</Typography>
                  <Typography variant="subtitle1">{textSecond}</Typography>
                </Box>
              </StyledLink>
            );
          })}
        </Box>
      </Stack>
    </StyledSidebar>
  );
};
