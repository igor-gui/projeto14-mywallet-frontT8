
export default function Home({editing, setEditing}) {

    return (
        <>
            <header>
                <h1>Olá, Fulano</h1>
                <ion-icon name="log-out-outline"></ion-icon>
            </header>

            <div>
                Não há registros de
                entrada ou saída
            </div>

            <div className="buttons">

                <div className="insert">
                    <ion-icon name="add-circle-outline"></ion-icon>
                    Nova entrada
                </div>

                <div className="insert">
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    Nova saída
                </div>

            </div>
        </>
    )
}