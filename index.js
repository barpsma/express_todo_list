const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log("running server with port " + port);
});
