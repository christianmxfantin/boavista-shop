import { useTheme } from "@emotion/react";
import {
  ConfirmationDataContainer,
  DataInfo,
  DataEdit,
} from "./ConfirmationData.styles";
import { Icon as EditIcon } from "../../../ui/Icon";

const ConfirmationData = ({ data }) => {
  const theme = useTheme();

  return (
    <ConfirmationDataContainer>
      <DataInfo>{data}</DataInfo>
      <DataEdit>
        <EditIcon
          name="Edit-Data"
          size={30}
          color={theme.palette.primary[500]}
          //   onClick={handleEdit}
        />
      </DataEdit>
    </ConfirmationDataContainer>
  );
};

export default ConfirmationData;
