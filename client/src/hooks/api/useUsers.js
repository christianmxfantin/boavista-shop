import { useState } from "react";
import {
  createUserResponse,
  deleteUserResponse,
  getUserByIdResponse,
  getUsersResponse,
  updateUserResponse,
} from "../../api/users";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState();

  const getUsers = async () => {
    try {
      const res = await getUsersResponse();
      setUsers(res.data);
    } catch (error) {
      setErrors(error);
    }
  };

  const getUserById = async (id) => {
    try {
      const res = await getUserByIdResponse(id);
      setUsers(res.data);
    } catch (error) {
      setErrors(error);
    }
  };

  const createUser = async (user) => {
    try {
      const res = await createUserResponse(user);
      setUsers(res.data);
    } catch (error) {
      setErrors(error);
    }
  };

  const updateUser = async (id, user) => {
    try {
      const res = await updateUserResponse(id, user);
      setUsers(res.data);
    } catch (error) {
      setErrors(error);
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const res = await deleteUserResponse(id);
      setUsers(res.data);
    } catch (error) {
      setErrors(error);
    }
  };

  return {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    users,
    errors,
  };
};

export default useUsers;
