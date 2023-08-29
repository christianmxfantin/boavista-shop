import { toast } from "react-toastify";
import { ErrorsMessages } from "./toastMessages";
import { toastColor } from "./toastOptions";

export const statusErrors = (error) => {
  //client error
  if (error.response.status > 399 || error.response.status < 500) {
    toast.error(ErrorsMessages.CLIENT_STATUS, toastColor("error"));
    return;
  }
  //server error
  if (error.response.status > 499) {
    toast.error(ErrorsMessages.SERVER_STATUS, toastColor("error"));
    return;
  }
};

export const conflictError = (error) => {
  if (error.response.statusText === "Conflict") {
    toast.error(error.response.data.message, toastColor("error"));
    return;
  }
};

export const responseError = (error) => {
  if (!error.response) {
    toast.error(ErrorsMessages.RESPONSE_ERROR, toastColor("error"));
    return;
  }
};
