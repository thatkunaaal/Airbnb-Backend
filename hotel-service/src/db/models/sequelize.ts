import { Sequelize } from "sequelize";
import {dbConfig} from "../../config/serverConfig";


export const sequelize = new Sequelize({
    dialect: "mysql",
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    logging: false
});

