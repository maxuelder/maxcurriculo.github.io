import { styled } from "styled-components";
import flutter from '../../../assets/Rectangle 7.png';
import react from '../../../assets/Rectangle 8.png';
import node from '../../../assets/Rectangle 9.png';
import js from '../../../assets/Rectangle 10.png';

const listaIcon = [flutter, react, node, js];

export default function Icones (){
    return (
        <IconesContainer>
            <IconContainer>
                {listaIcon.map((icon) => (
                    <IconesImg img src={icon}>
                        
                    </IconesImg>
                ))}
            </IconContainer>
        </IconesContainer>
    )
}

const IconesContainer = styled.div`
    display: flex;
    flex-direction: Column;
    height: 436px;
    left: 4.5%;
    right: 5%;
    position: absolute;
    top: 0%;
    width: 90%;
    @media (max-width: 768px) {
        height: 100%;
        top:10%;
        left:2%;
      }
    
      @media (max-width: 480px) {
        height: 100%;
        top:5%;
        left:2%
      }
`

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    
`

const IconesImg = styled.img`
    height: 100%;
    object-fit: cover;
    position: relative;
    top: 0;
    width: 15%;
    
`
