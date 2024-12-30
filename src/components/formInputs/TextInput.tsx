import React from "react";
import { TextFieldProps, TextField } from "@mui/material";

interface TextInputProps extends Omit<TextFieldProps, "onChange" | "type"> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  name: string;
  type?: string;
  placeholder?: string;
  label?: string;
  labelStyle?: React.CSSProperties;
}

const TextInput: React.FC<TextInputProps> = ({
  onChange,
  value,
  name,
  type = "text",
  placeholder,
  ...rest
}) => {
  return (
    <TextField
      fullWidth
      slotProps={{
        input: { className: "h-10 px-3 py-2 !rounded-[6px]" },
        htmlInput: { className: "!p-0" },
      }}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default TextInput;
