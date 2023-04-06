import { FormLabel, MenuItem, Select, SelectProps, Stack } from "@mui/material";
import React, { FC } from "react";
import { ISelectItem } from "../../../models/IMenuItem";

interface ISelectController extends SelectProps {
  label: string;
  items: ISelectItem[];
  value: string;
  onChange: (e: any) => void;
}
export const SelectController: FC<ISelectController> = ({
  label,
  IconComponent,
  items,
  onChange,
  value,
}) => {
  return (
    <Stack spacing={1}>
      <FormLabel>{label}</FormLabel>
      <Select
        IconComponent={IconComponent}
        onChange={onChange}
        value={value}
        fullWidth
      >
        {items.map(({ value, label }) => (
          <MenuItem value={value}>{label}</MenuItem>
        ))}
      </Select>
    </Stack>
  );
};
