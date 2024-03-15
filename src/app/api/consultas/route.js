import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET( request) {
    const alcaldias =await  prisma.alcaldia.findMany()

    console.log(alcaldias) 
    return NextResponse.json(alcaldias)
}




//YA NO EJECUTAR ESTA CONSULTA, YA QUE YA SE REGISTRO EN LA BD LAS ALCALDIAS
export async function POST(request) {

    try {
        const insertarDatosAlcaldia = await prisma.estado_reporte.createMany({
            data: [
                {alc_id: 2, alc_nombre: "Azcapotzalco"},
                {alc_id: 3, alc_nombre: "Coyoacán"},
                {alc_id: 4, alc_nombre: "Cuajimalpa de Morelos"},
                {alc_id: 5, alc_nombre: "Gustavo A. Madero"},
                {alc_id: 6, alc_nombre: "Iztacalco"},
                {alc_id: 7, alc_nombre: "Iztapalapa"},
                {alc_id: 8, alc_nombre: "La Magdalena Contreras"},
                {alc_id: 9, alc_nombre: "Milpa Alta"},
                {alc_id: 10, alc_nombre: "Álvaro Obregón"},
                {alc_id: 11, alc_nombre: "Tláhuac"},
                {alc_id: 12, alc_nombre: "Tlalpan"},
                {alc_id: 13, alc_nombre: "Xochimilco"},
                {alc_id: 14, alc_nombre: "Benito Juárez"},
                {alc_id: 15, alc_nombre: "Cuauhtémoc"},
                {alc_id: 16, alc_nombre: "Miguel Hidalgo"},
                {alc_id: 17, alc_nombre: "Venustiano Carranza"},
            ]
        })
        return  NextResponse.json(insertarDatosAlcaldia)

    } catch (error) {
        console.log(error.code)
        console.log(error.message)

    }

}
/* */


export async function DELETE(request) {
    try {
        await prisma.usuario.deleteMany()
        await prisma.nombre_Usuario.deleteMany()
        return NextResponse.json("se borro exitosamente")
    } catch (error) {
        console.error("Hubo un error a la hora de querer eliminar los datos ", error)
    }
}