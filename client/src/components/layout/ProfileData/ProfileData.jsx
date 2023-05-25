import { useState, cloneElement } from "react";
import { useTheme } from "@emotion/react";
import { Icon as EditIcon } from "../../../components/ui/Icon";
import {
  ProfileDataContainer,
  ProfileDataTitleContainer,
  ProfileDataTitle,
  EditIconContainer,
} from "./ProfileData.styles";

const ProfileData = ({ title, type, component }) => {
  const theme = useTheme();
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleEdit = () => {
    toggleEditMode();
  };

  const handleEditChange = (value) => {
    setEditMode(value);
  };

  return (
    <ProfileDataContainer>
      <ProfileDataTitleContainer>
        <ProfileDataTitle variant="h6">{title}</ProfileDataTitle>
        {type !== "payment" && (
          <EditIconContainer
            sx={{ visibility: editMode ? "hidden" : "visible" }}
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
      {cloneElement(component, { editMode, onEditChange: handleEditChange })}
    </ProfileDataContainer>
  );
};

export default ProfileData;
