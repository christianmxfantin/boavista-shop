import { useState, cloneElement } from "react";
import { useTheme } from "@emotion/react";
import { Icon as EditIcon } from "../../../components/ui/Icon";
import {
  ProfileDataContainer,
  ProfileDataTitleContainer,
  ProfileDataTitle,
  EditIconContainer,
} from "./ProfileData.styles";

const ProfileData = ({ title, component }) => {
  const theme = useTheme();
  const [editProfileMode, setEditProfileMode] = useState(false);

  const toggleEditMode = () => {
    setEditProfileMode(!editProfileMode);
  };

  const handleEdit = () => {
    toggleEditMode();
  };

  const handleEditChange = (value) => {
    setEditProfileMode(value);
  };

  return (
    <ProfileDataContainer>
      <ProfileDataTitleContainer>
        <ProfileDataTitle variant="h6">{title}</ProfileDataTitle>
        {title === "Datos de Cuenta" && (
          <EditIconContainer
            sx={{ visibility: editProfileMode ? "hidden" : "visible" }}
          >
            <EditIcon
              name="Edit-Data"
              size={30}
              color={theme.palette.primary[500]}
              onClick={handleEdit}
            />
          </EditIconContainer>
        )}
      </ProfileDataTitleContainer>
      {cloneElement(component, {
        editProfileMode,
        onProfileEditChange: handleEditChange,
      })}
    </ProfileDataContainer>
  );
};

export default ProfileData;
