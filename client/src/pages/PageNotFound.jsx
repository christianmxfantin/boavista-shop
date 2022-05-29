import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const PageNotFoundContainer = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary[500],
}));

const PageNotFound = () => {
  return (
    <>
      <PageNotFoundContainer>Page Not Found</PageNotFoundContainer>
    </>
  );
};

export default PageNotFound;
