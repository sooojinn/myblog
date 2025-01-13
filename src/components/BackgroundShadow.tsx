import { ReactNode, useEffect } from "react";

export default function BackgroundShadow({
  children,
  onClose,
  isVisible,
}: {
  children: ReactNode;
  onClose: () => void;
  isVisible: boolean;
}) {
  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVisible]);

  return (
    <div
      className={`fixed inset-0 bg-black z-50 hover:cursor-pointer transition-opacity duration-300 ease-in-out ${
        isVisible ? "bg-opacity-50" : "bg-opacity-0"
      }`}
      onClick={onClose}
    >
      {children}
    </div>
  );
}
