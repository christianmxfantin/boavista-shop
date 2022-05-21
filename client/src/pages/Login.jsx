import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const LoginContainer = styled(Typography)(({ theme }) => ({
  marginTop: "80px",
}));

const Login = () => {
  return (
    <>
      <LoginContainer>Login</LoginContainer>
    </>
  );
};

export default Login;
