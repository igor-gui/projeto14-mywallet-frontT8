import styled from "styled-components";
import { majorTextColor } from "./Patterns";

const Insert = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    div{
        display: flex;
        flex-direction: column;
        height: 114px;
        width: 155px;
        border-radius: 5px;
        background-color: #A328D6;
        color: ${majorTextColor};
        gap: 33px;
        margin-top: 13px;
        box-sizing: border-box;
        padding-left: 8px;

        cursor: pointer;
        ion-icon {
            width: 25px;
            height: 25px;
            margin-top: 9px;
        }

        font-family: 'Raleway';
        font-size: 17px;
        font-weight: 700;
        text-align: left;
    }
`
export default Insert