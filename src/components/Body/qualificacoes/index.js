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
@media (max-width: 768px) {
    top:0px;
    height: 200px;
  }

  @media (max-width: 480px) {
    top:0px;
    height: 200px;
  }


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
@media (max-width: 768px) {
    font-size: 16px;
    top:10%;
    left:2%;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    top:5%;
    left:2%
  }
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
@media (max-width: 768px) {
    font-size: 14px;
    top:25%;
    left: 5%;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    top:12%;
    left:5%;
  }
`