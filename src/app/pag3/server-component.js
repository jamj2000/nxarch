import { getFrutas } from "../action"

async function ServerComponent() {
    const frutas = await getFrutas()   // recuperamos datos

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

export default ServerComponent