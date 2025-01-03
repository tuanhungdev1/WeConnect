import { Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormField } from "@components/formFields";
import { TextInput } from "@components/formInputs";
import { PrimaryButton } from "@components/buttons";

interface ResetPasswordFormData {
  newPassword: string;
  confirmNewPassword: string;
}

// Tạo schema validation bằng yup
const schema = yup.object().shape({
  newPassword: yup
    .string()
    .required("Mật khẩu mới là bắt buộc")
    .min(8, "Mật khẩu phải có ít nhất 8 ký tự"),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), undefined], "Mật khẩu không khớp")
    .required("Xác nhận mật khẩu mới là bắt buộc"),
});

const ResetPasswordPage = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: yupResolver(schema), // Tích hợp schema validation vào react-hook-form
  });

  const onSubmit: SubmitHandler<ResetPasswordFormData> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Typography variant="h6" className="text-dark-100">
        Reset Password 🔒
      </Typography>
      <Typography
        variant="body1"
        className="mt-2 mb-5 text-base text-dark-100 opacity-80"
      >
        for <span className="font-medium">john.doe@email.com</span>
      </Typography>

      <form
        className="flex flex-col gap-4 mt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          control={control}
          label="New Password"
          Component={TextInput}
          type="password"
          placeholder="Enter new password"
          error={errors.newPassword?.message}
          {...register("newPassword")}
        />
        <FormField
          control={control}
          label="Confirm New Password"
          Component={TextInput}
          type="password"
          placeholder="Confirm new password"
          error={errors.confirmNewPassword?.message}
          {...register("confirmNewPassword")}
        />
        <PrimaryButton
          type="submit"
          fullWidth
          size="large"
          variant="contained"
          color="primary"
          className="mt-4 bg-blue-primary"
        >
          Set New Password
        </PrimaryButton>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
