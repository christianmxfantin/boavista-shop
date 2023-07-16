const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { sequelize } = require("./db/connection.js");

dotenv.config();
const app = express();

const port = process.env.PORT || 4000;
const routerAPI = require("./routes/index.js");

app.use(cors());
app.use(express.json());

routerAPI(app);

async function main() {
  try {
    await sequelize.sync({ force: true });
    app.listen(port, () => {
      console.log(`Server running on: http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the Database:", error);
  }
}

main();
