const db = require("../../db/models/index.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const logger = require("../../utils/logger.js");
const { ApiErrors } = require("../api/api.errors.js");
const cloudinary = require("../../utils/cloudinary.js");

const Products = db.products;
const ProductsImages = db.productsImages;

const getProductsImages = async (req, res, next) => {
  try {
    const productsImages = await ProductsImages.findAll();

    return res.status(200).json(productsImages);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const getProductImageById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingProductImage = await ProductsImages.findByPk(id);
    if (!existingProductImage) {
      return res.status(404).json({
        message: ApiErrors.ID_NOT_FOUND,
      });
    }

    return res.status(200).json(existingProductImage);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};
const createProductImage = async (req, res, next) => {
  try {
    const { image, productId } = req.body;

    if (!image) {
      return res.status(404).json({
        message: ApiErrors.URL_IMAGE_EMPTY,
      });
    }

    //Check if ProductID exists
    const existingProduct = await Products.findByPk(productId);
    if (!existingProduct) {
      return res.status(404).json({
        message: ApiErrors.ID_NOT_FOUND,
      });
    }

    const imageURL = await cloudinary.v2.uploader.upload(image, {
      folder: `boavista-shop/products/${productId}`,
    });

    const newProductImage = {
      url: imageURL,
      productId,
    };

    const savedImage = await ProductsImages.create(newProductImage);

    return res.status(201).json(savedImage);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const updateProductImage = async (req, res, next) => {
  try {
    const { id } = req.params;

    // const productData = await createAndUpdateProduct(req, res, next);
    // if (productData) {
    //   //Check if product id exists
    //   const existingProduct = await Products.findByPk(id);
    //   if (!existingProduct) {
    //     return res.status(404).json({
    //       message: ApiErrors.ID_NOT_FOUND,
    //     });
    //   }

    //   const updateProduct = await existingProduct.update(productData);
    //   return res.status(200).json(updateProduct);
    // }
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const deleteProductImage = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingProductImage = await ProductsImages.findByPk(id);
    if (!existingProductImage) {
      return res.status(404).json({
        message: ApiErrors.ID_NOT_FOUND,
      });
    }

    await ProductsImages.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

module.exports = {
  getProductsImages,
  getProductImageById,
  createProductImage,
  updateProductImage,
  deleteProductImage,
};
