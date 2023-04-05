import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { HeaderContainer, WalletContainer } from "./HeaderStyle";
import { IconNotification, IconQuestion, IconWallet } from "../../assets";
import { ButtonComponent } from "../Button";
import { IconTools } from "../../assets/IconTools";

export const Header = () => {
  return (
    <HeaderContainer flexDirection="row">
      <Box>
        <Typography variant="h5">YATT SOBIROV JAMSHID DAVRON O‘G‘LI</Typography>
        <Typography variant="h6">566800736</Typography>
      </Box>
      <Box component={Stack} direction="row" spacing={2}>
        <Stack alignItems="center" direction="row" spacing={2}>
          <WalletContainer>
            <IconWallet />
          </WalletContainer>
          <Box>
            <Typography fontWeight="400" variant="h5">
              Ваш баланс:
            </Typography>
            <Typography fontWeight="700" variant="h3" color="primary">
              150.000 сум
            </Typography>
          </Box>
        </Stack>
        <Stack alignItems="center" direction="row" spacing={5}>
          <ButtonComponent variant="contained" text="Активировать тариф" />
          <IconButton>
            <IconNotification />
          </IconButton>
          <IconButton>
            <IconQuestion />
          </IconButton>
          <IconButton>
            <IconTools />
          </IconButton>
        </Stack>
      </Box>
    </HeaderContainer>
  );
};
