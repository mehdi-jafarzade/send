import { Connect } from "@/db/dbc";
import Phonem from "@/model/lia";
import {  NextRequest, NextResponse } from "next/server";

export async function POST(req : NextRequest) {
  try {
    const {
        img,
    } = await req.json();
    await Connect();
    await Phonem.create({
        img,
    });
    return NextResponse.json({ status: 201 });
  } catch (err) {
    console.log(err);
  }
}