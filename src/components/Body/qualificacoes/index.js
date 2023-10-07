import { styled } from "styled-components";
import { texto, titulo } from "./dadosQualificacoes";

export default function Qualificacoes(){
    return(
        <QualificacoesContainer>
            <TituloContainer>
                {titulo.titulo}
            </TituloContainer>
            <TextoContainer>
                {texto.texto}
            </TextoContainer>
        </QualificacoesContainer>
    )
}

const QualificacoesContainer = styled.div`
height: 436px;
left: 4.5%;
right: 5%;
position: absolute;
top: 70px;
width: 90%;

`

const TituloContainer = styled.div`
color: #4a4f4d;
font-family: "Inter-Bold", Helvetica;
font-size: 30px;
font-weight: 700;
left: 37px;
letter-spacing: 0;
line-height: normal;
position: absolute;
`

const TextoContainer = styled.p`
color: #4a4f4d;
font-family: "Inter-Bold", Helvetica;
font-size: 25px;
font-weight: 400;
left: 5%;
letter-spacing: 0;
line-height: normal;
position: absolute;
top: 27px;
`