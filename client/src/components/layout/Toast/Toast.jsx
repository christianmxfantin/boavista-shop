import { useTheme } from "@emotion/react";
import { Alert, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Toast = ({ isToastVisible, setIsToastVisible, toastData }) => {
  const theme = useTheme();

  if (!toastData) {
    return null;
  }

  const { severity, message } = toastData;

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsToastVisible(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Snackbar
      open={isToastVisible}
      autoHideDuration={3000}
      onClose={handleClose}
      sx={{
        width: "95%",
        display: "flex",
        flexDirection: "column",
        top: "90px",
      }}
    >
      <Alert
        severity={severity}
        action={action}
        sx={{
          width: "100%",
          backgroundColor:
            severity === "success"
              ? theme.palette.success[500]
              : theme.palette.error[500],
          color: theme.palette.secondary.A100,
          "& .MuiAlert-icon": {
            color: theme.palette.secondary.A100,
          },
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
