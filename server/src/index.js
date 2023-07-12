const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
// const pool = require("./db/connection");
const { Client } = require("pg");

// const config = {
//   user: "postgres",
//   password: "12345",
//   host: "localhost",
//   database: "boavista",
//   port: 5432, // Puerto predeterminado de PostgreSQL
// };
// const client = new Client(config);
// client
//   .connect()
//   .then(() => {
//     console.log("Conexión exitosa a la base de datos");
//   })
//   .catch((err) => {
//     console.error("Error al conectar a la base de datos:", err);
//   });

dotenv.config();
const app = express();

const port = process.env.PORT || 4000;

const routerAPI = require("./routes");

app.use(cors());
app.use(express.json());

routerAPI(app);

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
