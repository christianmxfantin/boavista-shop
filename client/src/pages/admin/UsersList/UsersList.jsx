import { useTheme } from "@emotion/react";
import {
  Icon as EditIcon,
  Icon as DeleteIcon,
} from "../../../components/ui/Icon";
import { UsersListContainer, IconsContainer } from "./UsersList.styles";
import AvatarImage from "../../../images/product.jpg";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const UsersList = () => {
  const theme = useTheme();

  const users = [
    {
      id: 1,
      name: "El Mencho Medina Bello",
    },
    {
      id: 2,
      name: "Josemir Lukaku",
    },
  ];

  const handleEditUser = () => {
    console.log("Editar Usuario");
  };

  const handleDeleteUser = () => {
    console.log("Borrar Usuario");
  };

  return (
    <UsersListContainer>
      {users.map((user) => (
        <ListItem
          key={user.id}
          secondaryAction={
            <IconsContainer>
              <EditIcon
                name="Edit-Data"
                size={30}
                color={theme.palette.primary[500]}
                sx={{ marginRight: theme.spacing(1) }}
                onClick={handleEditUser}
              />
              <DeleteIcon
                name="Delete-Data"
                size={30}
                color={theme.palette.error[500]}
                onClick={handleDeleteUser}
              />
            </IconsContainer>
          }
          disablePadding
        >
          <ListItemButton>
            <ListItemAvatar>
              <Avatar
                alt={`Imágen del Usuario ${user.name}`}
                src={AvatarImage}
              />
            </ListItemAvatar>
            <ListItemText
              primary={user.name}
              sx={{ color: theme.palette.primary[500] }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </UsersListContainer>
  );
};

export default UsersList;
