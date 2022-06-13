import styles from "./Toast.module.scss";
import { useEffect } from "react";

export default function Toast({ toast, deleteToast }: any) {
  useEffect(() => {
    const interval = setInterval(() => {
      deleteToast();
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [deleteToast]);

  return (
    <div
      className={`${
        toast.includes("Success") ? styles.toastContainer : styles.warning
      }`}
    >
      {toast}
      <span className={styles.line} />
    </div>
  );
}
