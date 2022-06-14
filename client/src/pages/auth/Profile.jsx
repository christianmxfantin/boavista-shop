import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const ProfileContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: theme.palette.primary[500],
}));

const ProfileTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3), //24px
  fontWeight: "500",
}));

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileTitle variant="h4">Perfil</ProfileTitle>
    </ProfileContainer>
  );
};

export default Profile;
