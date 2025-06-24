import { createContext, useContext, useState, useCallback } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({ message: "", type: "info", visible: false });

  const showToast = useCallback((message, type = "info") => {
    setToast({ message, type, visible: true });
  }, []);

  const handleClose = (_, reason) => {
    if (reason === "clickaway") return;
    setToast((t) => ({ ...t, visible: false }));
  };

  const toastApi = {
    error: (msg) => showToast(msg, "error"),
    success: (msg) => showToast(msg, "success"),
    info: (msg) => showToast(msg, "info"),
  };

  return (
    <ToastContext.Provider value={toastApi}>
      {children}
      <Snackbar
        open={toast.visible}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <MuiAlert
          onClose={handleClose}
          severity={toast.type}
          elevation={6}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {toast.message}
        </MuiAlert>
      </Snackbar>
    </ToastContext.Provider>
  );
};

export default ToastProvider;