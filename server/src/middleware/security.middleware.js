const SecurityMiddleware = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  const response = {
    message: error.message,
  };
  if (error.url) {
    response.url = error.url;
  }
  return res.status(error.statusCode).json(response);
};

module.exports = {
  SecurityMiddleware,
};
