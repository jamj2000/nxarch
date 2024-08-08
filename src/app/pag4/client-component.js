
function Frutas({ frutas }) {
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

export default Frutas