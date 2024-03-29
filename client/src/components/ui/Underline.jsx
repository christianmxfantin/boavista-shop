import { Container } from "@mui/material";

const Underline = ({ width, height, color, hover }) => {
  return (
    <Container
      component={"hr"}
      sx={{
        display: "flex",
        borderRadius: "50%",
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: `${color}`,
        "&:hover": {
          backgroundColor: `${hover}`,
        },
      }}
    />
  );
};

export default Underline;
