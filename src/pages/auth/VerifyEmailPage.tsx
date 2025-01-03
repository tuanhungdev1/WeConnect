import { Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { FormField } from "@components/formFields";
import { TextInput } from "@components/formInputs";
import PrimaryButton from "@components/buttons/PrimaryButton";

interface VerifyEmailFormData {
  email: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email là bắt buộc")
    .email("Địa chỉ email không hợp lệ"),
});

const VerifyEmailPage = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<VerifyEmailFormData>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<VerifyEmailFormData> = (data) => {
    console.log(data);

    const emailExists = true;
    if (emailExists) {
      navigate("/enter-verification-code", { state: { email: data.email } });
    } else {
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
          error={errors.email?.message}
          {...register("email")}
        />
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
