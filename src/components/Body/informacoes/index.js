import { styled } from "styled-components";
import { formacao, experiencia } from "./dadosFormacao";

const informacao = [formacao, experiencia];


export default function Informacoes(){
    return(
        <FormacaoContainer>
            {informacao.map((info) => (
                <FormacaoInfo>
                <Titulo>
                    {info.titulo}
                </Titulo>
                <Texto>
                    {info.texto1}
                    <br/>
                    {info.texto2}
                    <br/>
                    {info.texto3}
                </Texto>
            </FormacaoInfo>
            ))}
        </FormacaoContainer>
    )
}

const FormacaoContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 200px;
    left: 4.5%;
    right: 5%;
    position: absolute;
    top: 51%;
    width: 90%;
    @media (max-width: 768px) {
        top:80%;
      }
    
      @media (max-width: 480px) {
        top:50%;
      }
`



const FormacaoInfo = styled.div`
    background-color: #ffffff;
    border-radius: 20px;
    height: 100px;
    position: relative;
    width: 48.5%;
    left: 37px;
    margin-right: 6%
    @media (max-width: 768px) {
        font-size: 16px;
        top:50%;
    }

    @media (max-width: 480px) {
        font-size: 14px;
        top:25%;
        left:2%;
    }
`

const Titulo = styled.div`
    color: #4a4f4d;
    font-family: "Inter-Bold", Helvetica;
    font-size: 30px;
    font-weight: 700;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    top: 0;
    @media (max-width: 768px) {
        font-size: 16px;
        top:10%;

      }
    
      @media (max-width: 480px) {
        font-size: 14px;
        top:5%;
        left:2%
      }
`

const Texto = styled.div`
color: #4a4f4d;
font-family: "Inter-Regular", Helvetica;
font-size: 28px;
font-weight: 400;
left: 18px;
letter-spacing: 0;
line-height: normal;
position: absolute;
top: 88px;
@media (max-width: 768px) {
    font-size: 14px;
    top:50%;
    left: 2%;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    top:50%;
    left:2%;
  }
`