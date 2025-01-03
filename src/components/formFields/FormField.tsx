/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormHelperText } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  label: string;
  name: Path<T>;
  type?: string;
  placeholder?: string;
  labelStyle?: React.CSSProperties;
  error?: string;
  Component: React.ComponentType<{
    onChange: (...event: any[]) => void;
    value: any;
    name: string;
    type?: string;
    label?: string;
    placeholder?: string;
    labelStyle?: React.CSSProperties;
    control?: Control<T>;
    errorMessage?: string;
  }>;
}

const FormField = <T extends FieldValues>({
  control,
  label,
  name,
  type,
  placeholder,
  labelStyle,
  Component,
  error,
}: FormFieldProps<T>) => {
  return (
    <div>
      <p className="mb-1 text-sm text-dark-100 opacity-90">{label}</p>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, name } }) => {
          return (
            <>
              <Component
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                name={String(name)}
                type={type}
                control={control}
                labelStyle={labelStyle}
                errorMessage={error}
              />
              {error && <FormHelperText error>{error}</FormHelperText>}
            </>
          );
        }}
      />
    </div>
  );
};

export default FormField;
