import React from 'react';
import styled from 'styled-components';

import Card from "./components/layout/Card";
import Card2 from "./components/layout/Card2";

import Contador from "./components/contador/Contador";
import MegaSena from './components/megasena/MegaSena';
import BiscoitoSorte from './components/biscoito-da-sorte/BiscoitoSorte';
import Cronometro from './components/cronômetro/Cronometro';

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

          <Card2 titulo="#Cronômetro" cor="#A8C499">
              <Cronometro />
          </Card2>
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