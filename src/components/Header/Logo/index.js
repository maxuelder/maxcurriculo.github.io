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
    @media (max-width: 768px) {
        height:70%;
        
      }
    
      @media (max-width: 480px) {
        height:70%;
        
      }
`

const LogoFoto = styled.img`
    margin-left:12%;
    margin-top:7%;
    object-fit: cover;
    @media (max-width: 768px) {
        height:40%;
        margin-top:40%;
        margin-left:20%
      }
    
      @media (max-width: 480px) {
        height:40%;
        margin-top:50%
      }
`