import { Outlet } from "react-router-dom";
import WeconnectLogo from "/weconnect-logo.svg";
import { Suspense } from "react";
import LoadingPage from "@components/loading/LoadingPage";

const AuthLayout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-dark-200">
      <div className="relative">
        <div className="absolute w-[250px] h-[250px] bg-slate-200 opacity-80 rounded-2xl -top-[80px] -left-[80px]"></div>
        <div className="w-[180px] h-[200px] absolute border-slate-300 -top-[120px] rounded-[30px] right-[200px] border-[1px] bg-transparent"></div>

        <div className="w-[180px] h-[180px] flex items-center justify-center absolute border-slate-300 -bottom-[80px] rounded-[30px] -right-[100px] border-[2px] bg-transparent border-dashed">
          <div className="w-[140px]  h-[140px] bg-slate-200 opacity-80 rounded-2xl -bottom-[60px] -right-[80px]"></div>
        </div>

        <div className="relative min-w-[480px] max-w-[500px] select-none w-full mx-4 bg-white px-8 py-8 rounded-lg shadow-lg">
          <img
            src={WeconnectLogo}
            alt="Logo"
            className="mx-auto mb-6 w-[58px]"
          />
          <Suspense fallback={<LoadingPage />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
