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
    height: 436px;
    left: 4.5%;
    right: 5%;
    position: absolute;
    top: 51%;
    width: 90%;
`

const FormacaoInfo = styled.div`
    background-color: #ffffff;
    border-radius: 20px;
    height: 323px;
    position: relative;
    width: 48.5%;
    left: 37px;
    margin-right: 6%
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
`