//aca estan las peticiones básicas que no necesitan de la ruta, ya que se le van a hacer llamadas

//estas rutas son para la parte del desplegado de los reportes que hay en la bd
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"; 

//AQUI ENDPOINT PARA RETORNAR LOS REPORTES QUE ESTEN EN LA BD
export async function GET( request) {
    const usuarios = prisma.estado_reporte.findMany()

    console.log(usuarios) 
    return NextResponse.json(usuarios)
}
