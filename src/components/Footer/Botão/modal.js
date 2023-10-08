import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';


export default function Modal({ mostrar, fecharModal, children }) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const template = {
      nome: nome,
      to_email: email
    }
    const informacoesContato = {
      nome: nome,
      email: email
    }
    const sendEmail =  () => {
      
      emailjs.send("service_5o9d8ua","template_e0lkmq2", template, 'oGPt5i6PjxO6e8zIt');

      emailjs.send("service_5o9d8ua", 'template_jf2q4k7', informacoesContato, 'oGPt5i6PjxO6e8zIt')

      alert('Contato enviado!')
    }
    

  return (
    <>
      {mostrar && (
        <ModalOverlay>
          <ModalContent>
            <FecharModal onClick={fecharModal}>&times;</FecharModal>
            {children}
            <Formulario>
                <form >
                    <Titulo>Preencha as informações</Titulo>
                    <InputTexto
                        type='text'
                        name='nome'
                        placeholder='Nome'
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                    <InputTexto
                        type='email'
                        name='email'
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <BotaoContainer type='submit' onClick={sendEmail}>
                        <Texto>Enviar</Texto>
                    </BotaoContainer>
                </form>
                
            </Formulario>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};



const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 30%;
  height: 50%;
  @media (max-width: 768px) {
    width: 75%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }

`;

const FecharModal = styled.span`
  margin-left: 100%;
  width: 100px;
  height: 100px;
  cursor: pointer;
  background-color: red;
  color: white
`;

const Formulario = styled.div`
    height: 80%;
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 5%;
    border: 1px solid;
    border-color: #00a5d9;
    border-radius: 5px;
`

const Titulo = styled.div`
    margin-top: 15%; 
    color: #4a4f4d;
    font-family: "Inter-Bold", Helvetica;
    font-size: 18px;
    font-weight: 700;
    width: 100%;
`

const InputTexto = styled.input`
    height: 40px;
    width: 80%;
    font-size: 16px;
    border: 1px solid;
    border-color: #00a5d9;
    border-radius: 5px;
    margin-top: 12%;
`

const BotaoContainer = styled.button`
    background-color: #00dfc5;
    border-radius: 20px;
    height: 30px;
    width: 80%;
    margin-top: 15%;
    position: relative
    
`
const Texto = styled.text`
    color: #ffffff;
    font-family: "Inter-Bold", Helvetica;
    font-size: 18px;
    font-weight: 700;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    top: 0;
`