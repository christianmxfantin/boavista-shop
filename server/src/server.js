const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();

const port = process.env.PORT || 4000;
const routerAPI = require("./routes/index.js");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

routerAPI(app);

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
