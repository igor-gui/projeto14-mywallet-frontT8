import EditStyle from "./Style/EditStyle";
import Formu from "./Style/Formu";

export default function EditList({editing, setEditing}){
    return (
        <EditStyle>
        <h1>Nova entrada</h1>
        <Formu>
            <input type="text" placeholder="Valor"/>
            <input type="text" placeholder="Descrição"/>
            <input className="button" type="submit" value='Salvar entrada' />
        </Formu>
        </EditStyle>
    )
}