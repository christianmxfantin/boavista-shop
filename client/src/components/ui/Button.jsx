import { useTheme } from "@emotion/react";
import { Button as ButtonComponent } from "@mui/material";

export const Button = ({
  name,
  variant,
  type,
  buttonStyle,
  sx,
  disabled,
  onClick,
}) => {
  const theme = useTheme();

  const buttonStyles = [
    {
      type: "primary",
      styles: {
        color: theme.palette.secondary.A100,
        backgroundColor: !disabled ? theme.palette.primary[500] : "inherit",
        "&:hover": {
          backgroundColor: theme.palette.secondary[500],
          color: theme.palette.primary[500],
        },
      },
    },
    {
      type: "secondary",
      styles: {
        color: theme.palette.primary[500],
        "&:hover": {
          backgroundColor: theme.palette.secondary[500],
          color: theme.palette.primary[500],
        },
      },
    },
  ];

  let style = buttonStyles.find((style) => style.type === buttonStyle);

  return (
    <ButtonComponent
      type={type}
      variant={variant}
      sx={sx ? { ...style.styles, ...sx } : style.styles}
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </ButtonComponent>
  );
};
