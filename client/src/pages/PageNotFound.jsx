import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const PageNotFoundContainer = styled(Typography)(({ theme }) => ({
  marginTop: "80px",
}));

const PageNotFound = () => {
  return (
    <>
      <PageNotFoundContainer>Page Not Found</PageNotFoundContainer>
    </>
  );
};

export default PageNotFound;
