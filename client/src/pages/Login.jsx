import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const LoginContainer = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary[500],
}));

const Login = () => {
  return (
    <>
      <LoginContainer>Login</LoginContainer>
    </>
  );
};

export default Login;
