import { useTheme } from "@emotion/react";
import { InputAdornment } from "@mui/material";
import { Icon } from "../../ui/Icon";

const DoneAdornment = ({ visibility }) => {
  const theme = useTheme();

  return (
    <InputAdornment position="end" sx={{ visibility }}>
      <Icon name="info-done" color={theme.palette.success[500]} />
    </InputAdornment>
  );
};

export default DoneAdornment;
