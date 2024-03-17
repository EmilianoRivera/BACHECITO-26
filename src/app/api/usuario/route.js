import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const usuarios = await prisma.reportes.findMany({
    select: {
      rep_ubicacion: true,
      rep_descripcion: true,
      rep_imagenURL: true,
      alcaldia: {
        select: {
          alc_nombre: true,
        },
      },
      
    },
  });

return NextResponse.json(usuarios)
}
