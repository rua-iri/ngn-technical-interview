import { getStudentData } from "@/lib/db_query";
import { NextResponse } from "next/server"
export const runtime = 'edge'

export async function GET(req, res) {
    
    const data = await getStudentData("SELECT * FROM students WHERE id > 4");

    return new NextResponse(JSON.stringify(data))
}