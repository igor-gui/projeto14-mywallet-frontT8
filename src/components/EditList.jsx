import EditStyle from "./style/EditStyle";
import Formu from "./style/Formu";

export default function EditList({ editing, setEditing }) {

    function handleForm(e){
        e.preventDefault()
        setEditing('')
    }

    return (
        <EditStyle>
            <h1>Nova {editing}</h1>
            <Formu onSubmit={handleForm}>
                <input type="text" placeholder="Valor" />
                <input type="text" placeholder="Descrição" />
                <input className="button" type="submit" value={`Salvar ${editing}`} />
            </Formu>
        </EditStyle>
    )
}