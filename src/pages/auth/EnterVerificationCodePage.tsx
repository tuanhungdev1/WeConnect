import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Typography } from "@mui/material";
import PrimaryButton from "@components/buttons/PrimaryButton";
import { Link, useNavigate, useLocation } from "react-router-dom";
import VerificationCodeInput from "@components/formInputs/VerificationCodeInput";
import { useVerifyOTPMutation } from "@services/rootApi";

export interface EnterVerificationCodeFormData {
  email: string;
  verificationCode: string;
}

const EnterVerificationCodePage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EnterVerificationCodeFormData>();
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
        <div>
          <Typography variant="body1" className="mb-2 text-dark-100">
            Verification Code
          </Typography>
          <Controller
            name="verificationCode"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <VerificationCodeInput
                {...field}
                length={6}
                sx={{
                  "& .MuiOtpInput-input": {
                    width: "3rem",
                    height: "3rem",
                    margin: "0.5rem",
                    fontSize: "1.5rem",
                    textAlign: "center",
                    borderRadius: "0.25rem",
                    border: "1px solid #ccc",
                    "&:focus": {
                      borderColor: "#007bff",
                      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
                    },
                  },
                }}
              />
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
