//aca estan las peticiones básicas que no necesitan de la ruta, ya que se le van a hacer llamadas
import { NextResponse } from "next/server"

export async function GET( request) {
    console.log(request)
    return NextResponse.json("SE HACE PETICION ")
}

export async function POST( request, {params}) {
    const {title, desc} = await request.json()
    
    return NextResponse.json("POST ")
}