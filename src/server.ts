import "reflect-metadata";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./database/dataSource";
import { routes } from "./routes";
const { swaggerUi, swaggerSpec } = require("./swagger");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(routes);

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source initialized");
    app.listen(2999, () => console.log("Server is running on http://localhost:2999"));
  })
  .catch((err) => console.error("Error during Data Source initialization:", err));