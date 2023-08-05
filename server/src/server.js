const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();

const port = process.env.PORT || 4000;
const routerAPI = require("./routes/index.js");
const { SecurityMiddleware } = require("./middleware/security.middleware.js");

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

routerAPI(app);

//Middleware
app.use(SecurityMiddleware);

async function main() {
  try {
    app.listen(port, () => {
      console.log(`Server running on: http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Server unavailable", error);
  }
}

main();
