const { ApiErrors } = require("./api.errors.js");
const ErrorHandler = require("../../utils/errorHandler.js");

const allRoutes = async (req, res, next) => {
  const err = new ErrorHandler(ApiErrors.URL_INVALID);
  err.statusCode = 404;
  err.url = req.originalUrl;
  next(err);
};

module.exports = {
  allRoutes,
};
