import Insert from "../Style/Insert";
import Registers from "../Style/Registers";
import StyledHome from "../Style/StyledHome";
export default function Home({ editing, setEditing }) {

    return (
        <StyledHome>
            <header>
                <h1>Olá, Fulano</h1>
                <ion-icon name="log-out-outline"></ion-icon>
            </header>

            <Registers>
                <h5>
                    Não há registros de
                    entrada ou saída
                </h5>
            </Registers>

            <Insert className="buttons">

                <div className="insert">
                    <ion-icon name="add-circle-outline"></ion-icon>
                    Nova entrada
                </div>

                <div className="insert">
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    Nova saída
                </div>

            </Insert>
        </StyledHome>
    )
}