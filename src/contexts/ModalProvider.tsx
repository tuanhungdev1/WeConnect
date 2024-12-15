/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

interface ModalContextType {
  openPopup: (content: React.ReactNode) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }

  return context;
};

const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isShowing, setIsShowing] = useState<boolean>(false);

  const [content, setContent] = useState<React.ReactNode>(null);

  useEffect(() => {
    if (isShowing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isShowing]);

  const openPopup = (modalContent: React.ReactNode) => {
    setIsShowing(true);
    setContent(modalContent);
  };

  return (
    <ModalContext.Provider value={{ openPopup }}>
      {children}
      {isShowing && (
        <div className="fixed inset-0">
          <div
            className="absolute inset-0 flex items-center justify-center bg-slate-600/60"
            onClick={() => setIsShowing(false)}
          >
            {content}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
