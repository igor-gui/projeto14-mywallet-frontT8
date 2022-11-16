import { Link } from 'react-router-dom'
import UserForm from '../Style/UserForm'
export default function SignIn() {

    return (
        <UserForm>
            <h1>MyWallet</h1>
            <form>
                <input type="text" placeholder="E-mail" />
                <input type="text" placeholder="Senha" />
                <input className="button" type="submit" value="Entrar" />
            </form>
            <Link to='/sing-up'>Primeira vez? Cadastre-se!</Link>
        </UserForm>
    )
}