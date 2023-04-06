import { Box, Stack, Typography } from "@mui/material";
import { ButtonComponent } from "../../components/Button";
import { IconCheckCircle, IconClear } from "../../assets";
import { AgreementForm, InfoForm } from "../../features";

export const IncomeDocs = () => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h1">Создание документа: Счёт-фактура</Typography>
        <ButtonComponent text="Назад / Отменить" />
      </Stack>
      <InfoForm />
      <AgreementForm />
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
