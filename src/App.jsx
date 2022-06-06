import React from 'react';
import styled from 'styled-components';

import Card from "./components/layout/Card";

import Contador from "./components/contador/Contador";
import MegaSena from './components/megasena/MegaSena';
import BiscoitoSorte from './components/biscoito-da-sorte/BiscoitoSorte';


export default function App(props) {
  return (
    <Container className="App">
        <h1>Desafios React</h1>

        <div className="cards">
          <Card titulo="#Contador" cor="#F1A18F">
              <Contador valorInicial={0} passo={1}/>
          </Card>

          <Card titulo="#MegaSena" cor="#5F679D">
              <MegaSena quantidade={7} />
          </Card>

          <Card titulo="#Biscoito da Sorte" cor="#46C9D5">
                <BiscoitoSorte />
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