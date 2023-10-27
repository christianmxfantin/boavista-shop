import { useState } from "react";
import { responseError, statusErrors } from "../../utils/toastErrors";
import {
  createUserResponse,
  deleteUserResponse,
  getUserByIdResponse,
  getUsersResponse,
  updateUserResponse,
} from "../../api/users";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);

  const getUsers = async () => {
    try {
      const res = await getUsersResponse();
      setUsers(res.data);
    } catch (error) {
      console.log(error);
      statusErrors(error);
      responseError(error);
    } finally {
      setLoadingUsers(false);
    }
  };

  const getUserById = async (id) => {
    try {
      const res = await getUserByIdResponse(id);
      setUsers(res.data);
    } catch (error) {
      console.log(error);
      statusErrors(error);
      responseError(error);
    }
  };

  const createUser = async (user) => {
    try {
      const res = await createUserResponse(user);
      setUsers(res.data);
    } catch (error) {
      console.log(error);
      statusErrors(error);
      responseError(error);
    }
  };

  const updateUser = async (id, user) => {
    try {
      const res = await updateUserResponse(id, user);
      setUsers(res.data);
    } catch (error) {
      console.log(error);
      statusErrors(error);
      responseError(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const res = await deleteUserResponse(id);
      if (res.status === 204) {
        const usersFilter = users.filter((user) => user.id !== id);
        setUsers(usersFilter);
      }
      setUsers(res.data);
    } catch (error) {
      console.log(error);
      statusErrors(error);
      responseError(error);
    }
  };

  return {
    users,
    loadingUsers,
    setUsers,
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  };
};

export default useUsers;
