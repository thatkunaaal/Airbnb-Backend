import dotenv from "dotenv";

type ServerConfig = {
  PORT: number;
};

type DBConfig = {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
};

function loadEnv() {
  dotenv.config();
  console.log(`Dotenv variables are loaded into the process.env`);
  console.log(`PORT: ${process.env.PORT}`);
}

loadEnv();

export const dbConfig: DBConfig = {
  username: process.env.DBusername || "root",
  password: process.env.DBpassword || "root",
  database: process.env.DBdatabase || "development",
  host: process.env.DBhost || "127.0.0.1",
  port: Number(process.env.DB_PORT) || 3306,
};

export const serverConfig: ServerConfig = {
  PORT: Number(process.env.PORT) || 3000,
};
