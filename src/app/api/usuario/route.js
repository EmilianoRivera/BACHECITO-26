//aca estan las peticiones básicas que no necesitan de la ruta, ya que se le van a hacer llamadas

//estas rutas son para la parte del desplegado de los reportes que hay en la bd
import { NextResponse } from "next/server"
import  {prisma} from "@/libs/prisma";

export async function GET( request) {
    const usuarios = prisma.usuario.findMany();

    console.log(usuarios) 
    return NextResponse.json(usuarios)
}

export async function POST( request) {
    const {nombre, appat, apmat} = await request.json()
    console.log(nombre, appat, apmat)
    const nuevoUsuario = await prisma.usuario.create({
        data: {
            nombre,
            appat,
            apmat
        }
    })
    console.log("No llego" , nuevoUsuario)
    return NextResponse.json(nuevoUsuario)
}