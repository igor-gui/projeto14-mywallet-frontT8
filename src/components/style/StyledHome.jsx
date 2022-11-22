import styled from "styled-components";
import { backGroundMobi, typoH1, majorTextColor } from "./Patterns";

const StyledHome = styled.main`
    ${ backGroundMobi }
    header {
        margin-top: 25px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 163px;
        margin-bottom: 22px;
        h1 {
            ${typoH1}
        }
        ion-icon {
            height: 26px;
            width: 26px;
            border-radius: 0px;
            color: ${majorTextColor};
            cursor: pointer;
        }
    }
    
`
export default StyledHome