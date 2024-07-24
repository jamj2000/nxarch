'use client'
import { useState, useEffect } from "react"
import { getFrutas } from "../action"


function ClientComponent() {
    const [frutas, setFrutas] = useState([])

    useEffect(() => {
        async function fetchData() {
            const datos = await getFrutas()    // recuperamos datos
            setFrutas(datos)
        }
        fetchData()
    }, [])
    
    return (
        <ul>
            {
                frutas.map((fruta) => (
                    <li key={fruta.id}>  {fruta.nombre} </li>
                ))
            }
        </ul>

    )
}

export default ClientComponent