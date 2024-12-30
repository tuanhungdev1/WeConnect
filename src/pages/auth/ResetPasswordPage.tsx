import { useForm, SubmitHandler } from "react-hook-form";
import { Typography } from "@mui/material";
import { FormField } from "@components/formFields";
import { TextInput } from "@components/formInputs";
import PrimaryButton from "@components/buttons/PrimaryButton";
import { Link } from "react-router-dom";

interface ResetPasswordFormData {
  newPassword: string;
  confirmNewPassword: string;
}

const ResetPasswordPage = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    getValues,
  } = useForm<ResetPasswordFormData>();

  const onSubmit: SubmitHandler<ResetPasswordFormData> = (data) => {
    console.log(data);
    // Thực hiện gửi yêu cầu đặt lại mật khẩu tới backend
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
          {...register("newPassword", {
            required: "Mật khẩu mới là bắt buộc",
            minLength: {
              value: 8,
              message: "Mật khẩu phải có ít nhất 8 ký tự",
            },
          })}
        />
        {errors.newPassword && (
          <Typography color="error">{errors.newPassword.message}</Typography>
        )}

        <FormField
          control={control}
          label="Confirm New Password"
          Component={TextInput}
          type="password"
          placeholder="Confirm new password"
          {...register("confirmNewPassword", {
            required: "Xác nhận mật khẩu mới là bắt buộc",
            validate: (value) =>
              value === getValues("newPassword") || "Mật khẩu không khớp",
          })}
        />
        {errors.confirmNewPassword && (
          <Typography color="error">
            {errors.confirmNewPassword.message}
          </Typography>
        )}

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
        <Typography
          variant="body1"
          className="mt-4 text-base text-center text-dark-100 opacity-80"
        >
          Remember your password?{" "}
          <Link to={"/login"} className="text-blue-primary">
            Sign in
          </Link>
        </Typography>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
