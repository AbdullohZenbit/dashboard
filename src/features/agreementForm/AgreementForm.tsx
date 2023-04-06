import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { SelectController, TextFieldController } from "../../components/Inputs";
import { MOCK_SELECT } from "../../constants";

export const AgreementForm = () => {
  return (
    <Box component="form">
      <Card>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <Typography variant="h2">Доверенность</Typography>
          </Grid>
          <Grid item xs={12} lg={8}>
            <SelectController
              items={MOCK_SELECT}
              label=""
              value=""
              onChange={() => {}}
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <TextFieldController
              label="Номер доверенности"
              placeholder="Введите данные"
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <TextFieldController
              label="Дата доверенности"
              placeholder="Введите данные"
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <TextFieldController label="ИНН" placeholder="Введите данные" />
          </Grid>
          <Grid item xs={12} lg={3}>
            <TextFieldController
              label="Ответственное лицо ФИО"
              placeholder="Введите данные"
            />
          </Grid>
        </Grid>
        <Stack direction="row" width="100%"></Stack>
      </Card>
    </Box>
  );
};
