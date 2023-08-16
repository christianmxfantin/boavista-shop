import { theme } from "../styles/theme";

export const toastOptions = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

export const toastColor = (type) => {
  const toastData = {
    ...toastOptions,
    style: {
      backgroundColor:
        type === "success"
          ? theme.palette.success[500]
          : theme.palette.error[500],
    },
  };

  return toastData;
};
