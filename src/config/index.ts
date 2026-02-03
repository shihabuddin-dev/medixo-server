import dotenv from "dotenv";
import path from "path";
import app from "../app";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const config = {
  connection_str: process.env.DATABASE_URL,
  port: process.env.PORT,
  app_url: process.env.APP_URL,
  auth_url: process.env.AUTH_URL,
  app_username: process.env.APP_USERNAME,
  app_password: process.env.APP_PASSWORD,
  google_client_id: process.env.GOOGLE_CLIENT_ID,
  google_client_secret: process.env.GOOGLE_CLIENT_SECRET,
};
export default config;