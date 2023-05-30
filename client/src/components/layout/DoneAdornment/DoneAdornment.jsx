import { useTheme } from "@emotion/react";
import { IconButton, InputAdornment } from "@mui/material";
import { Icon } from "../../ui/Icon";

const DoneAdornment = ({ visibility }) => {
  const theme = useTheme();

  return (
    <InputAdornment position="end" sx={{ visibility }}>
      <IconButton edge="end">
        <Icon name="info-done" color={theme.palette.success[500]} />
      </IconButton>
    </InputAdornment>
  );
};

export default DoneAdornment;
