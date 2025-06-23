import { config } from "dotenv";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import { sql } from "drizzle-orm";

config();

const runMigrations = async () => {
	console.log("🚀 Starting production database migrations...");

	if (!process.env.DATABASE_URL) {
		console.error("❌ DATABASE_URL environment variable is not set!");
		process.exit(1);
	}

	const client = new Client({
		connectionString: process.env.DATABASE_URL,
	});

	try {
		console.log("🔄 Connecting to database...");
		await client.connect();
		const db = drizzle(client);

		await db.execute(sql`SELECT 1`);
		console.log("✅ Database connection successful");

		try {
			const result = await db.execute(sql`
				SELECT COUNT(*) as count
				FROM information_schema.tables
				WHERE table_name = '__drizzle_migrations'
			`);
			const isFirstMigration = result.rows[0]?.count === '0';

			if (isFirstMigration) {
				console.log("🆕 First-time migration detected");
			} else {
				console.log("🔄 Running incremental migrations");
			}
		} catch (error) {
			console.log("🆕 First-time migration detected (no migration table)");
		}

		console.log("🔄 Applying migrations...");
		await migrate(db, {
			migrationsFolder: "./drizzle",
			migrationsTable: "__drizzle_migrations"
		});

		console.log("🎉 Migrations completed successfully!");

		console.log("🔍 Verifying database structure...");
		const tables = await db.execute(sql`
			SELECT table_name
			FROM information_schema.tables
			WHERE table_schema = 'public'
			AND table_type = 'BASE TABLE'
		`);

		const tableNames = tables.rows.map((row: any) => row.table_name);
		const requiredTables = ['user', 'session', 'account'];

		for (const table of requiredTables) {
			if (tableNames.includes(table)) {
				console.log(`✅ Table '${table}' exists`);
			} else {
				console.warn(`⚠️  Table '${table}' not found`);
			}
		}

	} catch (error) {
		console.error("❌ Migration failed:", error);
		process.exit(1);
	} finally {
		console.log("🔌 Closing database connection...");
		await client.end();
	}
};

if (require.main === module) {
	runMigrations()
		.then(() => {
			console.log("✨ Migration process completed");
			process.exit(0);
		})
		.catch((error) => {
			console.error("💥 Fatal migration error:", error);
			process.exit(1);
		});
}

export { runMigrations };
