import UserForm from "../Style/UserForm";
import { Link } from 'react-router-dom'

export default function SignUp() {
    return (
        <UserForm>
            <h1>MyWallet</h1>
            <form>
                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="E-mail" />
                <input type="text" placeholder="Senha" />
                <input type="text" placeholder="Confirme a senha" />
                <input className="button" type="submit" value="Cadastrar" />
            </form>
            <Link to='/'>Já tem uma conta? Entre agora!</Link>
        </UserForm>
    )
}