'use client'
import { useState, useEffect } from "react"


function ClientComponent() {
    const [frutas, setFrutas] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/frutas')  // recuperamos datos
            const datos = await response.json()
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