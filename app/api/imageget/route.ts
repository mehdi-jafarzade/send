import { Connect } from "@/db/dbc";
import Phonem from "@/model/lia";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await Connect();
    const datap = await Phonem.find();
    return NextResponse.json(datap);
  } catch (err) {
    console.log(err);
  }
}