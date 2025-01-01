/* eslint-disable react-refresh/only-export-components */
import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import "./styles/index.css";
import theme from "@configs/muiConfig";
import ModalProvider from "@contexts/ModalProvider";
import { AuthLayout, RootLayout } from "@layouts/index";
import {
  EnterVerificationCodePage,
  LoginPage,
  OTPVerifyPage,
  RegisterPage,
  ResetPasswordPage,
  VerifyEmailPage,
} from "@pages/auth/index";
import { Provider } from "react-redux";
import { store } from "@redux/store";

const HomePage = lazy(() => import("@pages/HomePage"));

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "register",
            element: <RegisterPage />,
          },
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            path: "verify-otp",
            element: <OTPVerifyPage />,
          },
          {
            path: "verify-email",
            element: <VerifyEmailPage />,
          },
          {
            path: "reset-password",
            element: <ResetPasswordPage />,
          },
          {
            path: "enter-verification-code",
            element: <EnterVerificationCodePage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <RouterProvider router={router} />
        </ModalProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
