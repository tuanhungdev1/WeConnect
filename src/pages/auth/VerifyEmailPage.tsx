import { useForm, SubmitHandler } from "react-hook-form";
import { Typography } from "@mui/material";
import { FormField } from "@components/formFields";
import { TextInput } from "@components/formInputs";
import PrimaryButton from "@components/buttons/PrimaryButton";
import { Link, useNavigate } from "react-router-dom";

interface VerifyEmailFormData {
  email: string;
}

const VerifyEmailPage = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<VerifyEmailFormData>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<VerifyEmailFormData> = (data) => {
    console.log(data);
    // Thực hiện gửi yêu cầu đặt lại mật khẩu tới backend
    // Nếu email tồn tại, gửi mã xác minh và chuyển hướng tới trang enter-verification-code
    // Giả sử backend trả về thành công
    const emailExists = true; // Thay thế bằng logic kiểm tra email từ backend
    if (emailExists) {
      navigate("/enter-verification-code");
    } else {
      // Hiển thị thông báo lỗi nếu email không tồn tại
      console.error("Email không tồn tại");
    }
  };

  return (
    <div>
      <Typography variant="h6" className="text-dark-100">
        Verify Email
      </Typography>
      <Typography
        variant="body1"
        className="mt-2 mb-5 text-base text-dark-100 opacity-80"
      >
        Please enter your email address to receive a verification code.
      </Typography>

      <form
        className="flex flex-col gap-4 mt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          control={control}
          label="Email"
          Component={TextInput}
          type="email"
          placeholder="Enter your email"
          {...register("email", {
            required: "Email là bắt buộc",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Địa chỉ email không hợp lệ",
            },
          })}
        />
        {errors.email && (
          <Typography color="error">{errors.email.message}</Typography>
        )}

        <PrimaryButton
          type="submit"
          fullWidth
          size="large"
          variant="contained"
          color="primary"
          className="mt-4 bg-blue-primary"
        >
          Send Verification Code
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

export default VerifyEmailPage;
