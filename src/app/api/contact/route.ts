import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/mongodb";
import Contact from "@/app/models/Contact";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    await connectToDatabase();
    const newContact = await Contact.create({ name, email, subject, message });

    return NextResponse.json({ message: "Message saved successfully!", data: newContact }, { status: 201 });
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
