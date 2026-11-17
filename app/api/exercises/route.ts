import { readFileSync } from "fs";
import path from "path";
import { NextResponse } from "next/server";

export function GET() {
    const file = readFileSync(path.join(process.cwd(), "app/data/exercises.json"), "utf-8");
    return NextResponse.json(JSON.parse(file));
}