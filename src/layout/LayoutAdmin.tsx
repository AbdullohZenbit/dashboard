import { Box, Stack } from "@mui/material";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export const LayoutAdmin = () => {
  return (
    <Box component={Stack} direction="row">
      <Sidebar />
      <Stack flex={2} minWidth="80%" direction="column">
        <Header />
        <Box p={4}>
          <Outlet />
        </Box>
      </Stack>
    </Box>
  );
};
