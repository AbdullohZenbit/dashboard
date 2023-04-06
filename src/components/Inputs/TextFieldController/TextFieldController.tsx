import { FormLabel, Stack, TextField, TextFieldProps } from "@mui/material";
import { FC } from "react";

type TextFieldControllerProps = TextFieldProps & {
  label: string;
  placeholder: string;
};

export const TextFieldController: FC<TextFieldControllerProps> = ({
  label,
  placeholder,
}) => {
  return (
    <Stack spacing={1}>
      <FormLabel color="primary">{label}</FormLabel>
      <TextField placeholder={placeholder} />
    </Stack>
  );
};
