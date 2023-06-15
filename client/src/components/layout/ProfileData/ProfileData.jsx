import { cloneElement } from "react";
import {
  ProfileDataContainer,
  ProfileDataTitleContainer,
  ProfileDataTitle,
  EditIconContainer,
} from "./ProfileData.styles";

const ProfileData = ({ title, component }) => {
  return (
    <ProfileDataContainer>
      <ProfileDataTitleContainer>
        <ProfileDataTitle variant="h6">{title}</ProfileDataTitle>
      </ProfileDataTitleContainer>
      {cloneElement(component)}
    </ProfileDataContainer>
  );
};

export default ProfileData;
