import { sql } from "drizzle-orm";
import { NextResponse } from "next/server";
import { db } from "@/drizzle/db";

export async function GET() {
  try {
    await db.execute(sql`SELECT 1`);

    return NextResponse.json(
      {
        status: "healthy",
        timestamp: new Date().toISOString(),
        database: "connected",
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "unhealthy",
        timestamp: new Date().toISOString(),
        error:
          error instanceof Error ? error.message : "Database connection failed",
      },
      { status: 503 },
    );
  }
}
