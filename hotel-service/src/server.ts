import express from "express";
import apiRoutes from "../src/routes";
import { serverConfig } from "./config/serverConfig";
import { genricErrorHandler } from "./middleware/error.middleware";
import { logger } from "./config/logger.config";
import { attachCorelationId } from "./middleware/request.middleware";
import { sequelize } from "./db/models/sequelize";

const app = express();
const PORT = serverConfig.PORT;

app.use(express.json());
app.use(attachCorelationId);

/*
 * Attaching the api endpoints here
 */
app.use("/api", apiRoutes);

/*
 * Attaching error handler
 */
app.use(genricErrorHandler);

app.listen(PORT, async () => {
  try {
    console.log(`Server is up and running on port: ${PORT}`);
    logger.info(`Server is up and running on port: ${PORT}`);

    await sequelize.authenticate();
    logger.info("DB connection has been established successfull!y.");

  } catch (error) {
    logger.error("Error while connecting database: ",error);
  }
});
