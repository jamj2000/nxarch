import { getFrutas } from "../action"
import Frutas from "./client-component"

async function ServerComponent() {
    const frutas = await getFrutas()   // recuperamos datos

    return <Frutas frutas={frutas} />
}

export default ServerComponent