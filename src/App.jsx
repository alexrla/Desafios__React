import React from 'react';
import styled from 'styled-components';

import Card from "./components/layout/Card";

import Contador from "./components/contador/Contador";


export default function App(props) {
  return (
    <Container className="App">
        <h1>Estudos React</h1>

        <div className="cards">
          <Card titulo="#Contador" cor="#F1A18F">
              <Contador valorInicial={0} passo={1}/>
          </Card>
        </div>
    </Container>
  );
}

const Container = styled.div`
  .cards  {
    display: flex;

    flex-wrap: wrap;

    justify-content: center;
  }
`;