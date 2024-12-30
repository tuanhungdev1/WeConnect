import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Typography } from "@mui/material";
import PrimaryButton from "@components/buttons/PrimaryButton";
import { Link, useNavigate } from "react-router-dom";
import VerificationCodeInput from "@components/formInputs/VerificationCodeInput";

interface EnterVerificationCodeFormData {
  verificationCode: string;
}

const EnterVerificationCodePage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EnterVerificationCodeFormData>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<EnterVerificationCodeFormData> = (data) => {
    console.log("Verification Code:", data.verificationCode);
    // Thực hiện kiểm tra mã xác minh với backend
    // Giả sử backend trả về thành công
    const codeIsValid = false; // Thay thế bằng logic kiểm tra mã xác minh từ backend
    if (codeIsValid) {
      navigate("/reset-password");
    } else {
      // Hiển thị thông báo lỗi nếu mã xác minh không đúng
      console.error("Mã xác minh không đúng");
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
        <div>
          <Typography variant="body1" className="mb-2 text-dark-100">
            Verification Code
          </Typography>
          <Controller
            name="verificationCode"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <VerificationCodeInput {...field} length={6} />
            )}
          />
        </div>
        {errors.verificationCode && (
          <Typography color="error">
            {errors.verificationCode.message}
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
