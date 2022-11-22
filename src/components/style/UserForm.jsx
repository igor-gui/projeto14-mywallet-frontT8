import styled from 'styled-components'
import { backGroundMobi, majorTextColor } from './Patterns'
const UserForm = styled.main`

    ${backGroundMobi}
    justify-content: center;
    gap:24px;

    h1{
        font-family: 'Saira Stencil One';
        font-size: 32px;
        font-weight: 400;
        text-align: left;
        color: ${majorTextColor};
    }


    a{
        font-family: 'Raleway';
        font-size: 15px;
        font-weight: 700;
        text-decoration: none;
        color: #FFFFFF;
    }
`

export default UserForm