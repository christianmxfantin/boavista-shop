const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();
const logger = require("./utils/logger.js");

const port = process.env.PORT || 4000;
const routerAPI = require("./routes/index.js");
const { SecurityMiddleware } = require("./middleware/security.middleware.js");

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());

process.on("uncaughtException", (err) => {
  logger.error("Uncaught Rejection Error: ", err);
  process.exit(1);
});
process.on("unhandledRejection", (err) => {
  logger.error("Unhandled Rejection Error: ", err);
  process.exit(1);
});

routerAPI(app);

//Middleware
app.use(SecurityMiddleware);
logger.info("Backend started succesfully");

const main = async () => {
  try {
    app.listen(port, () => {
      logger.info(`Server running on: http://localhost:${port}`);
    });
  } catch (err) {
    logger.error("Error running Server: ", err);
    process.exit(1);
  }
};

main();
