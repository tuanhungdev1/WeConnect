/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  label: string;
  name: Path<T>;
  type?:
    | "number"
    | "search"
    | "text"
    | "password"
    | "email"
    | "url"
    | "tel"
    | "date";
  Component: React.ComponentType<{
    onChange: (...event: any[]) => void;
    value: any;
    name: string;
    type?:
      | "number"
      | "search"
      | "text"
      | "password"
      | "email"
      | "url"
      | "tel"
      | "date";
    control?: Control<T>;
  }>;
}

const FormField = <T extends FieldValues>({
  control,
  label,
  name,
  type,
  Component,
}: FormFieldProps<T>) => {
  return (
    <div>
      <p className="mb-1 text-sm text-dark-100 opacity-90">{label}</p>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <Component
              onChange={onChange}
              value={value}
              name={String(name)}
              type={type}
              control={control}
            />
          );
        }}
      />
    </div>
  );
};

export default FormField;
