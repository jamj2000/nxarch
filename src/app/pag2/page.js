import Link from "next/link"
import ClientComponent from "./client-component"

function page() {

    return (
        <>
            <Link href="/">Página de inicio</Link>
            <h1>Frutas</h1>
            <i style={{ color: "red" }}> Action / ClientComponent </i>
            <ClientComponent />
        </>
    )

}

export default page