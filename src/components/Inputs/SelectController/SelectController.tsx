import { FC } from "react";
import { FormLabel, MenuItem, Select, SelectProps, Stack } from "@mui/material";
import { ISelectItem } from "../../../models/IMenuItem";
import { IconSelectDown } from "../../../assets";

interface ISelectController extends SelectProps {
  label: string;
  items: ISelectItem[];
  value: string;
  onChange: (e: any) => void;
}
export const SelectController: FC<ISelectController> = ({
  label,
  items,
  onChange,
  value,
}) => {
  return (
    <Stack spacing={1}>
      <FormLabel>{label}</FormLabel>
      <Select
        IconComponent={IconSelectDown}
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
