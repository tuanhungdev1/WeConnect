import { PrimaryButton } from "@components/buttons";
import { FormField } from "@components/formFields";
import { TextInput } from "@components/formInputs";
import { Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import FaceBookLogo from "/facebook-logo.svg";
import GoogleLogo from "/google-logo.svg";
import TwitterLogo from "/twiter-logo.svg";

const RegisterPage = () => {
  const { control } = useForm();

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

      <form className="flex flex-col gap-4 mt-5">
        <FormField
          control={control}
          label="Username"
          name="username"
          Component={TextInput}
        />
        <FormField
          control={control}
          label="Email"
          name="email"
          Component={TextInput}
          type="email"
        />

        <FormField
          control={control}
          label="Password"
          name="password"
          Component={TextInput}
          type="password"
        />

        <FormField
          control={control}
          label="Confirm Password"
          name="confirmPassword"
          Component={TextInput}
          type="password"
        />

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
