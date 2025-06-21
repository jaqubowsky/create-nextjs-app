import { config } from "dotenv";
import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

config();

const resetDatabase = async () => {
  console.log("🚨 WARNING: This will completely reset your database!");
  console.log("All tables and data will be permanently deleted.");

  if (!process.env.DATABASE_URL) {
    console.error("❌ DATABASE_URL environment variable is not set!");
    console.error("💡 Make sure your .env file contains DATABASE_URL");
    process.exit(1);
  }

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  let db;

  try {
    console.log("🔄 Connecting to database...");
    await client.connect();
    db = drizzle(client);

    console.log("🔄 Starting database reset...");

    console.log("📋 Fetching custom types...");
    const typesResult = await db.execute<{ typname: string }>(sql`
      SELECT typname
      FROM pg_type
      WHERE typtype = 'e'
      AND typnamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'public');
    `);

    for (const type of typesResult.rows || []) {
      await db.execute(
        sql`DROP TYPE IF EXISTS ${sql.identifier(type.typname)} CASCADE;`
      );
      console.log(`✅ Dropped type: ${type.typname}`);
    }

    console.log("📋 Fetching tables...");
    const tablesResult = await db.execute<{ table_name: string }>(sql`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      AND table_type = 'BASE TABLE';
    `);

    for (const table of tablesResult.rows || []) {
      await db.execute(
        sql`DROP TABLE IF EXISTS ${sql.identifier(table.table_name)} CASCADE;`
      );
      console.log(`✅ Dropped table: ${table.table_name}`);
    }

    console.log("📋 Cleaning up sequences...");
    const sequencesResult = await db.execute<{ sequence_name: string }>(sql`
      SELECT sequence_name
      FROM information_schema.sequences
      WHERE sequence_schema = 'public';
    `);

    for (const sequence of sequencesResult.rows || []) {
      await db.execute(
        sql`DROP SEQUENCE IF EXISTS ${sql.identifier(sequence.sequence_name)} CASCADE;`
      );
      console.log(`✅ Dropped sequence: ${sequence.sequence_name}`);
    }

    console.log("📋 Cleaning up functions...");
    const functionsResult = await db.execute<{ routine_name: string }>(sql`
      SELECT routine_name
      FROM information_schema.routines
      WHERE routine_schema = 'public'
      AND routine_type = 'FUNCTION';
    `);

    for (const func of functionsResult.rows || []) {
      await db.execute(
        sql`DROP FUNCTION IF EXISTS ${sql.identifier(func.routine_name)} CASCADE;`
      );
      console.log(`✅ Dropped function: ${func.routine_name}`);
    }

    console.log("🎉 Database reset completed successfully!");
    console.log("💡 Don't forget to run migrations: npm run db:migrate");
  } catch (error) {
    console.error("❌ Error resetting database:", error);
    process.exit(1);
  } finally {
    if (client) {
      console.log("🔌 Closing database connection...");
      await client.end();
    }
    process.exit(0);
  }
};

resetDatabase().catch((error) => {
  console.error("❌ Fatal error:", error);
  process.exit(1);
});
