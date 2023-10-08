
import { styled} from "styled-components";
import { informacoes, nome, texto } from "./dadosInformacoes";
export default function Information(){
    const isMobile = window.innerWidth < 778;
    console.log(isMobile)
    return(
        <InformationContainer isMobile={isMobile}>
            <Nome>
                {nome.nome}
            </Nome>
            <Texto>
                {texto.texto}
            </Texto>
            <Email >
                    {informacoes.email} <br />
                    {informacoes.telefone}
                    <br />
                    {informacoes.endereco}
                    <br />
                    {informacoes.cep}
            </Email>

        </InformationContainer>
    )
}

const InformationContainer = styled.div`
    background-color: #ffffff;
    margin-left: 50%;  
    height: 100%;
    width: 50%;
    position: absolute;
    border: 1px solid;
    border-color: #00a5d9;
    @media (max-width: 768px) {
        height:70%;
        
      }
    
      @media (max-width: 480px) {
        height:70%;
        
      }
`

const Email = styled.div`
    color: #4a4f4d;
    font-family: "Inter-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    align-items: center;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    bottom: 0;
    @media (max-width: 768px) {
        font-size: 11px;
        
      }
    
      @media (max-width: 480px) {
        font-size: 9px;
        
      }
`

const Nome = styled.div`
color: #4a4f4d;
font-family: "Inter-Regular", Helvetica;
font-size: 30px;
font-weight: 400;
letter-spacing: 0;
line-height: normal;
position: absolute;
width: 100%;
top: 6%;
text-align: center;

@media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`

const Texto = styled.div`
    color: #4a4f4d;
    font-family: "Inter-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    position: absolute;
    width: 90%;
    left: 5%;
    right: 10%;
    top: 35%;
    @media (max-width: 768px) {
        font-size: 12px;
        top:25%;
      }
    
      @media (max-width: 480px) {
        font-size: 11px;
        top:25%%;
      }
`

