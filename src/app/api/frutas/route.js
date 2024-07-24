import frutas from "@/app/frutas.json"

export async function GET(request) {
    // Aquí 
    // 1. realizamos la consulta a la BD
    // 2. esperamos un tiempo
    // 3. devolvemos el resultado
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return Response.json(frutas);
}
