import { useState, useEffect, createContext } from "react";
import { EmailType } from "../../interfaces/Interfaces";
import styles from "./Toast.module.scss";
import Toast from "./Toast";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const ToastContext = createContext({});

export default ToastContext;

export const ToastContextProvider = ({ children }: any) => {
  const [toasts, setToasts] = useState<any[]>([]);

  const addToast = (toast: string) => {
    setToasts((toasts) => [
      ...toasts,
      {
        toast,
        id: uuidv4(),
      },
    ]);
  };
  const deleteToast = () => {
    setToasts((toasts) => toasts.slice(1));
  };

  const registrationHandler = async ({ email, setEmail }: EmailType) => {
    const response = await axios.post("/api/newsletter", { email: email });
    addToast(response.data.message);
    setEmail("");
  };

  return (
    <ToastContext.Provider value={registrationHandler}>
      {children}
      <div className={styles.toasts}>
        {toasts.map((toast) => {
          return (
            <Toast
              key={toast?.id}
              index={toast?.index}
              toast={toast?.toast}
              toats={toasts}
              deleteToast={deleteToast}
            />
          );
        })}
      </div>
    </ToastContext.Provider>
  );
};
