import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request) {

    try {
        const insertarDatosAlcaldia = await prisma.alcaldia.createMany({
            data: [
                {alc_id: "002", alc_nombre: "Azcapotzalco"},
                {alc_id: "003", alc_nombre: "Coyoacán"},
                {alc_id: "004", alc_nombre: "Cuajimalpa de Morelos"},
                {alc_id: "005", alc_nombre: "Gustavo A. Madero"},
                {alc_id: "006", alc_nombre: "Iztacalco"},
                {alc_id: "007", alc_nombre: "Iztapalapa"},
                {alc_id: "008", alc_nombre: "La Magdalena Contreras"},
                {alc_id: "009", alc_nombre: "Milpa Alta"},
                {alc_id: "010", alc_nombre: "Álvaro Obregón"},
                {alc_id: "011", alc_nombre: "Tláhuac"},
                {alc_id: "012", alc_nombre: "Tlalpan"},
                {alc_id: "013", alc_nombre: "Xochimilco"},
                {alc_id: "014", alc_nombre: "Benito Juárez"},
                {alc_id: "015", alc_nombre: "Cuauhtémoc"},
                {alc_id: "016", alc_nombre: "Miguel Hidalgo"},
                {alc_id: "017", alc_nombre: "Venustiano Carranza"},
            ]
        })
        console.log(insertarDatosAlcaldia)
    } catch (error) {
        console.log(error.code)
        console.log(error.message)

    }

}