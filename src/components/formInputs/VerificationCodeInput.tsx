import React from "react";
import { MuiOtpInput, MuiOtpInputProps } from "mui-one-time-password-input";

interface CustomOTPInputProps extends MuiOtpInputProps {
  length?: number;
}

const VerificationCodeInput: React.FC<CustomOTPInputProps> = ({
  length = 6,
  ...props
}) => {
  return (
    <MuiOtpInput
      length={length}
      {...props}
      className="mt-2"
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
  );
};

export default VerificationCodeInput;
