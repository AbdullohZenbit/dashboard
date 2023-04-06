import { Box, Stack } from "@mui/material";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export const LayoutAdmin = () => {
  return (
    <Box minHeight="100vh" minWidth="100vw" component={Stack} direction="row">
      <Sidebar />
      <Stack minWidth="80%" direction="column">
        <Header />
        <Box p={4}>
          <Outlet />
        </Box>
      </Stack>
    </Box>
  );
};
