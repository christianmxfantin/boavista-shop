import { useTheme } from "@emotion/react";
import { EmptyDataContainer, EmptyDataTitle } from "./EmptyData.styles";
import { Icon } from "../../ui/Icon";

const EmptyData = ({ iconName, size, title }) => {
  const theme = useTheme();

  if (iconName === "card") iconName = "credit-card";

  return (
    <EmptyDataContainer
      sx={{
        height:
          iconName === "checkout" ||
          (iconName === "products" && title !== "productos")
            ? "85vh"
            : "inherit",
      }}
    >
      <Icon name={iconName} size={size} color={theme.palette.primary[500]} />
      <EmptyDataTitle component="div" variant="h5">
        {`Todavía no hay ${title} por aquí`}
      </EmptyDataTitle>
    </EmptyDataContainer>
  );
};

export default EmptyData;
