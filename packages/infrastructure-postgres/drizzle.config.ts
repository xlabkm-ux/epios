import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";
import { expand } from "dotenv-expand";

// Загружаем .env из корня монорепозитория
const envConfig = dotenv.config({ path: "../../.env" });
expand(envConfig);

export default defineConfig({
  schema: "./src/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
