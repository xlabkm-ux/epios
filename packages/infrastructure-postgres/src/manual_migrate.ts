import postgres from "postgres";
import * as dotenv from "dotenv";
import { expand } from "dotenv-expand";

// Load .env from project root
const envConfig = dotenv.config({ path: "../../.env" });
expand(envConfig);

console.log(
  "Using DATABASE_URL:",
  process.env.DATABASE_URL?.replace(/:[^:@]+@/, ":****@"),
);
const sql = postgres(process.env.DATABASE_URL!);

async function migrate() {
  console.log("Running manual migration...");
  try {
    await sql`ALTER TABLE workspaces ADD COLUMN IF NOT EXISTS is_pinned BOOLEAN NOT NULL DEFAULT FALSE`;
    await sql`ALTER TABLE workspaces ADD COLUMN IF NOT EXISTS archived_at TIMESTAMPTZ`;
    await sql`ALTER TABLE workspaces ADD COLUMN IF NOT EXISTS archive_comment TEXT`;
    console.log("Migration successful!");
  } catch (error) {
    console.error("Migration failed:", error);
  } finally {
    await sql.end();
  }
}

migrate();
