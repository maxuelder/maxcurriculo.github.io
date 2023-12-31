import { styled } from "styled-components";
import Qualificacoes from "./qualificacoes";
import Informacoes from "./informacoes";

export default function Body(){
    return (
        <BodyContainer>
            <Qualificacoes/>
            <BodyInformacoes>
                <Informacoes/>
            </BodyInformacoes>
        </BodyContainer>
    )
}

const BodyContainer = styled.div`
left: 12%;
right: 12%;
display: flex;
height: 998px;
position: absolute;
top: 400px;
width: 76%;
@media (max-width: 768px) {
    height: 300px;
    top:300px;
  }

  @media (max-width: 480px) {
    height: 300px;
    top:300px;
  }

`

const BodyInformacoes = styled.div`

`