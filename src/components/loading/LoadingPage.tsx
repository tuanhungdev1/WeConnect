import { createPortal } from "react-dom";
import { PulseLoader } from "react-spinners";
import WeConnectLogoUrl from "/weconnect-logo.svg";
import usePreventScroll from "@hooks/usePreventScroll";

const LoadingPage = () => {
  usePreventScroll();
  return createPortal(
    <div className="fixed inset-0 z-10 flex flex-col items-center justify-center gap-5 -translate-y-20 bg-white">
      <img src={WeConnectLogoUrl} alt="Logo We Connect" className="w-[100px]" />

      <PulseLoader color="#87b9e2" speedMultiplier={0.6} margin={4} />
    </div>,
    document.body
  );
};

export default LoadingPage;
