//aca estan las peticiones básicas que no necesitan de la ruta, ya que se le van a hacer llamadas

//estas rutas son para la parte del desplegado de los reportes que hay en la bd
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"; 


export async function GET( request) {
    const usuarios =await  prisma.estado_reporte.findMany()

    console.log(usuarios) 
    return NextResponse.json(usuarios)
}

