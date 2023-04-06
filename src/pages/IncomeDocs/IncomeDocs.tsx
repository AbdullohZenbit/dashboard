import {
  Box,
  Card,
  FormControlLabel,
  Grid,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { SelectController, TextFieldController } from "../../components/Inputs";
import { ButtonComponent } from "../../components/Button";
import { IconCheckCircle, IconClear, IconSelectDown } from "../../assets";
import { MOCK_SELECT } from "../../constants/mockData.constants";
import { useState } from "react";

export const IncomeDocs = () => {
  const [select, setSelect] = useState("");

  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h1">Создание документа: Счёт-фактура</Typography>
        <ButtonComponent text="Назад / Отменить" />
      </Stack>
      <Card className="card" color="secondary">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <SelectController
              IconComponent={IconSelectDown}
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
      <Stack mt={3} direction="row" justifyContent="space-between">
        <Box component={Stack} spacing={1} direction="row">
          <ButtonComponent
            startIcon={<IconClear />}
            color="error"
            text="Отменить"
          />
          <ButtonComponent
            startIcon={<IconCheckCircle />}
            text="Показать документ"
          />
        </Box>
        <Box component={Stack} spacing={1} direction="row">
          <ButtonComponent text="Сохранить" />
          <ButtonComponent text="Подписать" />
        </Box>
      </Stack>
    </>
  );
};
