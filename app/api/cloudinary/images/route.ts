import { NextResponse } from "next/server";
import { getImagesFromFolder } from "@/lib/cloudinary-actions";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const folder = searchParams.get("folder") || "clientes";

  if (!process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    return NextResponse.json(
      { error: "Faltan credenciales privadas de Cloudinary en .env.local" },
      { status: 500 }
    );
  }

  const images = await getImagesFromFolder(folder);
  return NextResponse.json({ images });
}
