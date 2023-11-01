import { categoryByNameResponse } from "../../../api/categories";
import { discountByNameResponse } from "../../../api/discounts";
import {
  createProductResponse,
  updateProductResponse,
} from "../../../api/products";
import { createProductImageResponse } from "../../../api/productsImages";
import { getRoles } from "../../../api/roles";
import {
  createUserResponse,
  getUserByIdResponse,
  updateUserResponse,
} from "../../../api/users";
import { capitalizeWords } from "../../../utils/capitalizeWords";
import { responseError, statusErrors } from "../../../utils/toastErrors";

export const createUser = async (avatarURL, formValues) => {
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
    statusErrors(error);
    responseError(error);
  }
};

export const updateUser = async (data, avatarURL, formValues) => {
  const userFound = await getUserByIdResponse(data.id);

  const user = {
    id: userFound.data.id,
    avatarURL: !avatarURL ? "https://res.cloudinary.com/image.jpg" : avatarURL,
    names: capitalizeWords(formValues.names.trim()),
    surnames: capitalizeWords(formValues.surnames.trim()),
    email: formValues.email.toLowerCase().trim(),
    password: userFound.data.password,
    roleId: userFound.data.roleId,
  };

  const updatedUser = await updateUserResponse(data.id, user);
  return updatedUser.data;
};

export const createProduct = async (userId, formValues, images) => {
  const saveImages = async (image, productId) => {
    const imageData = {
      image,
      productId,
    };

    await createProductImageResponse(imageData);
  };

  const categoryResponse = await categoryByNameResponse({
    name: formValues.category.trim(),
  });

  let percentageNumber;
  if (formValues.discount === "Sin Descuento") {
    percentageNumber = Number(0);
  } else {
    percentageNumber = Number(formValues.discount.trim().replace("% OFF", ""));
  }
  const discountResponse = await discountByNameResponse({
    percentage: percentageNumber,
  });

  const newProduct = {
    name: capitalizeWords(formValues.name.trim()),
    price: parseFloat(formValues.price.trim()),
    stock: Number(formValues.stock.trim()),
    discountId: discountResponse.data.id,
    categoryId: categoryResponse.data.id,
    userId,
  };

  const registerProduct = await createProductResponse(newProduct);
  if (images) {
    for (let i = 0; i < images.length; i++) {
      await saveImages(images[i], registerProduct.data.id);
    }
  }

  return registerProduct.data;
};

export const updateProduct = async (data, userId, formValues) => {
  const product = {
    id: data.id,
    name: capitalizeWords(formValues.name.trim()),
    price: parseFloat(formValues.price.trim()),
    stock: Number(formValues.stock.trim()),
    discountId: "702a923b-486c-4aa2-91d5-7a885db78e47",
    categoryId: "53d8f2ba-5eba-4aed-8b71-122ee0948f17",
    userId,
  };

  const updatedProduct = await updateProductResponse(data.id, product);
  return updatedProduct.data;
};
