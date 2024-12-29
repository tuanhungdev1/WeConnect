import LoadingPage from "@components/loading/LoadingPage";
import usePreventScroll from "@hooks/usePreventScroll";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  usePreventScroll(false);

  return (
    <div>
      <Suspense fallback={<LoadingPage />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default RootLayout;
