import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";
import { expand } from "dotenv-expand";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Загружаем .env из корня монорепозитория
const envPath = path.resolve(__dirname, "../../.env");
const myEnv = dotenv.config({ path: envPath });
expand(myEnv);

export default defineConfig({
  schema: "./src/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
