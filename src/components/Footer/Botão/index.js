import React, { useState } from 'react';
import { styled } from "styled-components"
import Modal from './modal.js'; 
export default function Botao(){

    const [mostrarModal, setMostrarModal] = useState(false);

    const abrirModal = () => {
        setMostrarModal(true);
      };
    
      const fecharModal = () => {
        setMostrarModal(false);
      };


    return (
        <>
        <BotaoContainer onClick={abrirModal}>
            <Texto>Entrar em contato.</Texto>
        </BotaoContainer>
        <Modal mostrar={mostrarModal} fecharModal={fecharModal}></Modal>
        </>
    )
}

const BotaoContainer = styled.button`
    background-color: #00dfc5;
    border-radius: 20px;
    height: 69px;
    width: 45%;
    left: 30%;
    top: 79%;
    position: absolute
    
`
const Texto = styled.text`
    color: #ffffff;
    font-family: "Inter-Bold", Helvetica;
    font-size: 25px;
    font-weight: 700;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    top: 0;
`
