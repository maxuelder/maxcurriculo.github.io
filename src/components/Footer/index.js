import { styled } from "styled-components";
import Icones from "./Icons";
import Botao from "./Botão";

export default function Footer (){
    return (
        <FooterContainer>
            <Icones/>
            <Botao/>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
left: 12%;
right: 12%;
display: flex;
height: 322px;
position: absolute;
top: 1300px;
width: 76%;

`
