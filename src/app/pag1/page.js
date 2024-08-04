import Link from "next/link"
import ServerComponent from "./server-component"
import { Suspense } from "react"

function page() {

    return (
        <>
            <Link href="/">Página de inicio</Link>
            <h1>Frutas</h1>
            <i style={{ color: "red" }}> Action / ServerComponent </i>
            <Suspense>
                <ServerComponent />
            </Suspense>
        </>

    )
}

export default page

