import { useTheme } from "@emotion/react";
import { Alert, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Toast = ({ isToastVisible, setIsToastVisible, message }) => {
  const theme = useTheme();

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
        severity="success"
        action={action}
        sx={{
          width: "100%",
          backgroundColor: theme.palette.success[500],
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
