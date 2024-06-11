import { useEffect } from "react";
import { create } from "zustand";
import { TriangleAlertIcon } from "../icons/triangle-warning";

type ToastStore = {
  show: boolean;
  message: string;
  type?: "success" | "warning" | "error";
  duration?: number;
  setShow: (show: boolean) => void;
  showToast: (
    message: string,
    type?: "success" | "warning" | "error",
    duration?: number
  ) => void;
};

export const useToast = create<ToastStore>((set) => {
  return {
    show: false,
    message: "",
    type: "success",
    duration: 3000,
    setShow: (show: boolean) => set({ show }),
    showToast: (
      message: string,
      type?: "success" | "warning" | "error",
      duration?: number
    ) => {
      set({ message, type, duration, show: true });
    },
  };
});

export const ToastProvider = () => {
  const { message, duration, show, setShow } = useToast();

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setShow(false);
      }, duration || 5000);
    }
  }, [show]);

  return (
    <div
      className={`text-xl absolute z-10 top-0 
      ml-auto mr-auto left-0 right-0 
      flex justify-center items-center ease-in transition-all 
    ${show ? "opacity-100 top-28  duration-500" : "opacity-0 top-[-50px] duration-300"}
      `}
    >
      <div className="bg-destructive px-4 py-2 rounded-full flex flex-row gap-4 items-center">
        <TriangleAlertIcon className="w-8 h-8 text-white" />
        <h1 className="text-xl text-destructiveForeground">{message}</h1>
      </div>
    </div>
  );
};
