import { PrimaryButton } from "@components/buttons";
import { FormField } from "@components/formFields";
import { TextInput } from "@components/formInputs";
import { Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import FaceBookLogo from "/facebook-logo.svg";
import GoogleLogo from "/google-logo.svg";
import TwitterLogo from "/twiter-logo.svg";

interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterPage = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    getValues,
  } = useForm<RegisterFormData>();

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="mt-5">
      <Typography variant="h5" className="mb-2 text-2xl text-dark-100">
        Adventure starts here 🚀
      </Typography>
      <Typography
        variant="body1"
        className="mt-2 mb-5 text-base text-dark-100 opacity-80"
      >
        Make your app management easy and fun!
      </Typography>

      <form
        className="flex flex-col gap-4 mt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          control={control}
          label="Username"
          Component={TextInput}
          {...register("username", {
            required: "Tên đăng nhập là bắt buộc",
            maxLength: {
              value: 100,
              message: "Tên đăng nhập không được vượt quá 100 ký tự",
            },
          })}
        />
        {errors.username && (
          <Typography color="error">{errors.username.message}</Typography>
        )}
        <FormField
          control={control}
          label="Email"
          Component={TextInput}
          type="email"
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
        <FormField
          control={control}
          label="Password"
          Component={TextInput}
          type="password"
          {...register("password", {
            required: "Mật khẩu là bắt buộc",
            minLength: {
              value: 8,
              message: "Mật khẩu phải có ít nhất 8 ký tự",
            },
          })}
        />
        {errors.password && (
          <Typography color="error">{errors.password.message}</Typography>
        )}
        <FormField
          control={control}
          label="Confirm Password"
          Component={TextInput}
          type="password"
          {...register("confirmPassword", {
            required: "Xác nhận mật khẩu là bắt buộc",
            validate: (value) =>
              value === getValues("password") || "Mật khẩu không khớp",
          })}
        />
        {errors.confirmPassword && (
          <Typography color="error">
            {errors.confirmPassword.message}
          </Typography>
        )}
        <PrimaryButton
          type="submit"
          fullWidth
          size="large"
          variant="contained"
          color="primary"
          className=" bg-blue-primary"
        >
          Sign up
        </PrimaryButton>
        <Typography
          variant="body1"
          className="mt-4 text-base text-center text-dark-100 opacity-80"
        >
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-primary">
            Sign in instead
          </Link>
        </Typography>
      </form>

      <div className="flex items-center justify-between mt-6">
        <div className="w-[160px] h-[1.5px] bg-slate-200"></div>
        <div className="text-dark-100 opacity-80">or</div>
        <div className="w-[160px] h-[1.5px] bg-slate-200"></div>
      </div>

      <div className="flex items-center justify-center gap-3 mt-6">
        <div className="flex items-center justify-center rounded-lg w-[38px] h-[38px] bg-[#4267B229] cursor-pointer hover:shadow-sm transition duration-300">
          <img src={FaceBookLogo} alt="Facebook Logo" />
        </div>

        <div className="flex items-center justify-center rounded-lg w-[38px] h-[38px] bg-[#1DA1F229] cursor-pointer hover:shadow-sm transition duration-300">
          <img src={TwitterLogo} alt="Twitter Logo" />
        </div>

        <div className="flex items-center justify-center rounded-lg w-[38px] h-[38px] bg-[#DB443729] cursor-pointer hover:shadow-sm transition duration-300">
          <img src={GoogleLogo} alt="Google Logo" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
