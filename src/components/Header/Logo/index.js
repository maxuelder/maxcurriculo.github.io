import { styled } from "styled-components";
import foto from '../../../assets/Ellipse 1.svg';

export default function Logo(){
    const isMobile = window.innerWidth < 778;
    return (
        <LogoContainer isMobile={isMobile}>
            <LogoFoto img src={foto}/>
        </LogoContainer>
    )
}

const LogoContainer = styled.div`
    background-color: #00a5d9;
    height: 100%;
    position: absolute;
    margin-left: 0px;
    width: 50%;
    border: 1px solid;
    border-color: #00a5d9;
`

const LogoFoto = styled.img`
    margin-left:12%;
    margin-top:7%;
`