import { useState } from "react";
import { Box, Card, Grid, Stack, Switch, Typography } from "@mui/material";
import { MOCK_SELECT } from "../../constants/mockData.constants";
import { SelectController, TextFieldController } from "../../components/Inputs";

export const InfoForm = () => {
  const [select, setSelect] = useState("");
  return (
    <Box component="form">
      <Card>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <SelectController
              value={select}
              onChange={(e) => {
                setSelect(e.target.value);
              }}
              label="Тип счета "
              items={MOCK_SELECT}
            />
          </Grid>
          <Grid item xs={12} lg={6}></Grid>
          <Grid item xs={12} lg={6}>
            <TextFieldController
              placeholder="Номер счет-фактуры "
              label="Номер счет-фактуры "
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextFieldController
              placeholder="Дата документа"
              label="Дата документ"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextFieldController
              placeholder="Введите номер контракта"
              label="Введите номер контракта  "
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextFieldController
              placeholder="Дата контракта"
              label="Дата до "
            />
          </Grid>
        </Grid>
      </Card>
      <Card className="card" color="secondary">
        <Box component={Stack} direction="row" spacing={3}>
          <Box flex={1}>
            <Typography variant="h2">Ваша информация</Typography>
            <Grid mt={1} container spacing={3}>
              <Grid item xs={12} lg={12}>
                <SelectController
                  value=""
                  onChange={() => {}}
                  items={MOCK_SELECT}
                  label="ИНН "
                />
              </Grid>
              <Grid item xs={12} lg={12}>
                <TextFieldController
                  placeholder="Введите данные "
                  label="НДС регистрационный номер "
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextFieldController
                  placeholder="Введите данные"
                  label="Номер счета"
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextFieldController
                  placeholder="Введите данные"
                  label="Номер счета"
                />
              </Grid>
              <Grid item xs={12} lg={12}>
                <TextFieldController
                  placeholder="Введите данные"
                  label="Адрес"
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextFieldController
                  placeholder="Введите данные"
                  label="Директор"
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextFieldController
                  placeholder="Введите данные"
                  label="Главный бухгалтер"
                />
              </Grid>
            </Grid>
          </Box>
          <Box flex={1}>
            <Typography variant="h2">Информация о подрядчике</Typography>
            <Grid mt={1} container spacing={3}>
              <Grid item xs={12} lg={6}>
                <TextFieldController
                  label="Номер счета *"
                  placeholder="Обязательное поле"
                />
              </Grid>
              <Grid alignItems="center" item xs={12} lg={6}>
                <Stack direction="row" height="100%" alignItems="center">
                  <Typography variant="h4" color="text.disabled">
                    {" "}
                    Односторонний счет?
                  </Typography>
                  <Switch defaultChecked />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <TextFieldController
                  placeholder="Введите данные "
                  label="Компания-партнер"
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextFieldController
                  placeholder="Введите данные"
                  label="Номер счета"
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextFieldController placeholder="Введите данные" label="МФО" />
              </Grid>
              <Grid item xs={12} lg={12}>
                <TextFieldController
                  placeholder="Введите данные"
                  label="Адрес"
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextFieldController
                  placeholder="Введите данные"
                  label="Директор"
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextFieldController
                  placeholder="Введите данные"
                  label="Главный бухгалтер"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
