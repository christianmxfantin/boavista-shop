import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const RegisterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: theme.palette.primary[500],
}));

const RegisterTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3), //24px
  fontWeight: "500",
}));

const Register = () => {
  return (
    <RegisterContainer>
      <RegisterTitle variant="h4">Registro</RegisterTitle>
    </RegisterContainer>
  );
};

export default Register;
