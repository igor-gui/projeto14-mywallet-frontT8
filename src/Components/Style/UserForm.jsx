import styled from 'styled-components'

const UserForm = styled.main`
    height: 667px;
    width: 375px;
    background-color: #8C11BE;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:24px;

    h1{
        font-family: 'Saira Stencil One';
        font-size: 32px;
        font-weight: 400;
        text-align: left;
        color: #FFFFFF;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 13px;
        margin-bottom: 12px;
        
        
        input {
            font-family: 'Raleway';
            font-size: 20px;
            font-weight: 400;

            box-sizing: border-box;
            padding-left: 16px;
            height: 58px;
            width: 326px;
            border-radius: 5px;
            background-color: #FFFFFF;
            border: 0;
            ::placeholder{
                color: #000000;
                opacity: 1;
                
            }
        }
        .button {
            padding-left: 0;
            height: 46px;
            width: 326px;
            border-radius: 5px;
            background-color: #A328D6;

            font-family: 'Raleway';
            font-size: 20px;
            font-weight: 700;
            color: #FFFFFF;
            cursor: pointer;
        }
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