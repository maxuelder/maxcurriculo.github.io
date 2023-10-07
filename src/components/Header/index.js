import { styled } from "styled-components";
import Information from "./Informacoes";
import Logo from "./Logo";

export default function Header(){
    return (
        <HeaderContainer>
            <Logo/>
            <Information />
            
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    left: 12%;
    right:12%;
    height: 350px;
    width: 76%;
    display: flex;
    position: relative;
    background-color: #FFFFFF;
    
`