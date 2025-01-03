import { useVerifyOTPMutation } from "@services/rootApi";
import { Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FormField } from "@components/formFields";
import { TextInput } from "@components/formInputs";
import PrimaryButton from "@components/buttons/PrimaryButton";

export interface EnterVerificationCodeFormData {
  email: string;
  verificationCode: string;
}

// Tạo schema validation bằng yup
const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email là bắt buộc")
    .email("Địa chỉ email không hợp lệ"),
  verificationCode: yup
    .string()
    .required("Mã xác minh là bắt buộc")
    .length(6, "Mã xác minh phải có 6 ký tự"),
});

const EnterVerificationCodePage = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<EnterVerificationCodeFormData>({
    resolver: yupResolver(schema), // Tích hợp schema validation vào react-hook-form
  });
  const navigate = useNavigate();
  const location = useLocation();
  const [verifyOTP] = useVerifyOTPMutation();

  // Lấy email từ state được truyền khi điều hướng từ trang trước
  const email = location.state?.email;

  const onSubmit: SubmitHandler<EnterVerificationCodeFormData> = async (
    data
  ) => {
    console.log("Verification Code:", data.verificationCode);
    if (!email) {
      console.error("Email không tồn tại");
      return;
    }

    try {
      const response = await verifyOTP({
        email,
        verificationCode: data.verificationCode,
      }).unwrap();
      if (response.success) {
        navigate("/reset-password");
      } else {
        console.error(response.message);
      }
    } catch (error) {
      console.error("Lỗi khi xác minh mã OTP:", error);
    }
  };

  return (
    <div>
      <Typography variant="h6" className="text-dark-100">
        Enter Verification Code
      </Typography>
      <Typography
        variant="body1"
        className="mt-2 mb-5 text-base text-dark-100 opacity-80"
      >
        Please enter the verification code sent to your email.
      </Typography>

      <form
        className="flex flex-col gap-4 mt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          control={control}
          label="Verification Code"
          Component={TextInput}
          type="text"
          placeholder="Enter verification code"
          error={errors.verificationCode?.message}
          {...register("verificationCode")}
        />
        <PrimaryButton
          type="submit"
          fullWidth
          size="large"
          variant="contained"
          color="primary"
          className="mt-4 bg-blue-primary"
        >
          Verify Code
        </PrimaryButton>
        <Typography
          variant="body1"
          className="mt-4 text-base text-center text-dark-100 opacity-80"
        >
          Didn't receive the code?{" "}
          <Link to={"/verify-email"} className="text-blue-primary">
            Resend
          </Link>
        </Typography>
      </form>
    </div>
  );
};

export default EnterVerificationCodePage;
