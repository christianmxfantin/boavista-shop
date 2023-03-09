import { useTheme } from "@emotion/react";
import { Button as ButtonComponent } from "@mui/material";

export const Button = ({ name, variant, type, sx, disabled, onClick }) => {
  const theme = useTheme();

  const buttonStyles = [
    {
      name: "primary",
      styles: {
        color: theme.palette.secondary.A100,
        backgroundColor: theme.palette.primary[500],
        "&:hover": {
          backgroundColor: theme.palette.secondary[500],
          color: theme.palette.primary[500],
        },
      },
    },
  ];

  let style = buttonStyles.find((style) => style.name === type);

  return (
    <ButtonComponent
      variant={variant}
      sx={!sx ? style.styles : sx}
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </ButtonComponent>
  );
};
