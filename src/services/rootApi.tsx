import { EnterVerificationCodeFormData } from "@pages/auth/EnterVerificationCodePage";
import { LoginFormData } from "@pages/auth/LoginPage";
import { RegisterFormData } from "@pages/auth/RegisterPage";
import { RootState } from "@redux/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse } from "@types-d/type";

export const rootApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      console.log({ store: getState() });
      const state = getState() as RootState;
      const token = state.auth.accessToken;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      register: builder.mutation<ApiResponse<object>, RegisterFormData>({
        query: ({ email, password, confirmPassword, username }) => {
          return {
            url: "/signup",
            body: { username, email, password, confirmPassword },
            method: "POST",
          };
        },
      }),
      login: builder.mutation<ApiResponse<object>, LoginFormData>({
        query: ({ password, username, isRememberMe }) => {
          return {
            url: "/login",
            body: { password, username, isRememberMe },
            method: "POST",
          };
        },
      }),
      verifyOTP: builder.mutation<
        ApiResponse<object>,
        EnterVerificationCodeFormData
      >({
        query: ({ email, verificationCode }) => {
          return {
            url: "/verify-otp",
            body: { email, verificationCode },
            method: "POST",
          };
        },
      }),
      getAuthUser: builder.query({
        query: () => "/auth-user",
      }),
    };
  },
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useVerifyOTPMutation,
  useGetAuthUserQuery,
} = rootApi;
