import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #f2f2f2;
  
  @media (max-width: 768px) {
    background-color: lightblue;
  }

  @media (max-width: 480px) {
    background-color: lightgreen;
  }
`;

const MeuComponente = () => {
  return (
    <Container>
      <h1>Componente Responsivo</h1>
      <p>Este componente é responsivo!</p>
    </Container>
  );
};

export default MeuComponente;