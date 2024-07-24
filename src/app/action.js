"use server"
import frutas from "./frutas"

export async function getFrutas() {
    // Aquí 
    // 1. realizamos la consulta a la BD
    // 2. esperamos un tiempo
    // 3. devolvemos el resultado
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return frutas
}
