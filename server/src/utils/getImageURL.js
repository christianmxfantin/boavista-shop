const getImageURL = (url) => {
  const boavistaIndex = url.indexOf("boavista");

  let parts = url.slice(boavistaIndex);
  if (typeof parts !== "array") {
    parts = [parts];
  }
  const fileName = parts.join("/");

  const extensionIndex = fileName.lastIndexOf(".");
  const fileNameWithoutExtension = fileName.slice(0, extensionIndex);

  return fileNameWithoutExtension;
};

module.exports = { getImageURL };
