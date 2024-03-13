import { Pool } from "pg";

require("dotenv").config();

const DBConfig = {
  user: "postgres", //process.env.DB_USER,
  host: "localhost", //process.env.DB_HOST,
  database: "clientes_teste", //process.env.DB_DATABASE,
  password: "teste", //process.env.DB_PASSWORD,
  port: 5432, //process.env.DB_PORT,
};
const pool = new Pool({
  user: "postgres", //process.env.DB_USER,
  host: "localhost", //process.env.DB_HOST,
  database: "clientes_teste", //process.env.DB_DATABASE,
  password: "teste", //process.env.DB_PASSWORD,
  port: 5432, //process.env.DB_PORT,
});

export const PgHelper = new Pool(DBConfig);
/*export const PgHelper = {
  query: (text: any, params?: any) => pool.query(text, params),
};*/
