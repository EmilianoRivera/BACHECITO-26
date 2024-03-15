"use client"
import { useEffect, useState } from "react";

//Aqui se tienen que hacer el despliegue de los reportes

export default  function Reportes() {
    const [data, setData] = useState(null)

    useEffect(() => {
      async function fetchData() {
        const res = await fetch("/api/usuario", {
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json()
        setData(data)
    }  
    fetchData()
}, [])

if (!data) {
    return <div>Cargando...</div>;
}
return (
    <div>
            {data.map((reporte, index) => (
                <div key={index}>
                    <p>Ubicacion: {reporte.rep_ubicacion}</p>
                    <p>Descripcion:{reporte.rep_descripcion}</p>
                    <p>Imagen: {reporte.rep_imagenURL}</p>
                    <p>Alcaldia: {reporte.alcaldia.alc_nombre}</p>
                  {/*   <p>Estado Reporte: {reporte.estado_reporte.edo_tipo}</p>
                    
                    <p>Nombre de reporte: {reporte.nombre_Usuario.nomu_nombre}</p> */}
                </div>
            ))}
        </div>
    );
  
}/* 
return (
    <div>
        <p>Correo: {data.usu_correo}</p>
        <p>Estado de cuenta: {data.usu_estado_cuenta ? 'Activa' : 'Inactiva'}</p>
        <p>Nombre de usuario: {data.nombre_Usuario}</p>
    </div>
); */