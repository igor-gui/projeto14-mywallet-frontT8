import UserForm from "../Style/UserForm";
import { Link } from 'react-router-dom'
import Formu from "../Style/Formu";

export default function SignUp() {
    return (
        <UserForm>
            <h1>MyWallet</h1>
            <Formu>
                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />
                <input type="password" placeholder="Confirme a senha" />
                <input className="button" type="submit" value="Cadastrar" />
            </Formu>
            <Link to='/'>Já tem uma conta? Entre agora!</Link>
        </UserForm>
    )
}