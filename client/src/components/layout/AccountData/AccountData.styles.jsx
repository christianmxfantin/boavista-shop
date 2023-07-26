import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AccountDataContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const AccountInfoContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const AvatarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: theme.spacing(4),
}));

export const ChangeEmailInput = styled(TextField)(() => ({
  //styles
}));

export const LastPasswordInput = styled(TextField)(() => ({
  //styles
}));

export const NewPasswordInput = styled(TextField)(() => ({
  //styles
}));

export const ConfirmPasswordInput = styled(TextField)(() => ({
  //styles
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: theme.spacing(2), //16px
}));
