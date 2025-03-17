import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";

dotenv.config();

const config = parse(process.env.DATABASE_URL);
config.ssl = {
  rejectUnauthorized: false
};

const pool = new Pool(config);
export default pool;