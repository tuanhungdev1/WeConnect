import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

interface CheckboxInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: boolean;
  name: string;
  label: string;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  onChange,
  value,
  name,
  label,
}) => {
  return (
    <FormControlLabel
      control={<Checkbox onChange={onChange} checked={value} name={name} />}
      label={label}
      sx={{ "& .MuiFormControlLabel-label": { fontSize: "14px" } }}
    />
  );
};

export default CheckboxInput;
