import Insert from "../style/Insert";
import Registers from "../style/Registers";
import StyledHome from "../style/StyledHome";
export default function Home({ editing, setEditing }) {

    const entrada = 'entrada';
    const saida = 'saída';

    function goToEdit(string){
        setEditing(string)
    }

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

                <div onClick={() => goToEdit(entrada)} className="insert">
                    <ion-icon name="add-circle-outline"></ion-icon>
                    Nova {entrada}
                </div>

                <div onClick={() => goToEdit(saida)} className="insert">
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    Nova {saida}
                </div>

            </Insert>
        </StyledHome>
    )
}