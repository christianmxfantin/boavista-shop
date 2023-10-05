import { getRoles } from "../../../api/roles";
import { createUserResponse } from "../../../api/users";
import { capitalizeWords } from "../../../utils/capitalizeWords";

export const createUsers = async (avatarURL, formValues) => {
  try {
    const roles = await getRoles();
    const roleName = roles.data.find(
      (role) => role.name.toLowerCase().trim() === "user"
    );

    const date = new Date();
    const newPassword = `User${date.getFullYear()}`;

    const newUser = {
      avatarURL: !avatarURL
        ? "https://res.cloudinary.com/image.jpg"
        : avatarURL,
      names: capitalizeWords(formValues.names.trim()),
      surnames: capitalizeWords(formValues.surnames.trim()),
      email: formValues.email.toLowerCase().trim(),
      password: newPassword,
      roleId: roleName.id,
    };

    const registerUser = await createUserResponse(newUser);
    return registerUser.data;
  } catch (error) {
    console.log(error);
  }
};
