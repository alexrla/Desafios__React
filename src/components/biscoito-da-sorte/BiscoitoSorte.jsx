import React, { Component } from 'react';
import styled from 'styled-components';

import Botao from './Botao';

class BiscoitoSorte extends Component   {
    constructor(props)  {
        super(props);

        this.state = {
            mensagem: ""
        };

        this.frases = ["Siga os bons e aprenda com eles.", 
                       "O bom-senso vale mais do que muito conhecimento.", 
                       "O riso é a menor distância entre duas pessoas.", 
                       "Deixe de lado as preocupações e seja feliz.",
                       "Realize o óbvio, pense no improvável e conquiste o impossível.",
                       "Acredite em milagres, mas não dependa deles.",
                       "A maior barreira para o sucesso é o medo do fracasso."];

        this.abrirBiscoito = this.abrirBiscoito.bind(this);
    }

    abrirBiscoito() {
        let state = this.state;

        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    
        state.mensagem = '"' + this.frases[numeroAleatorio] + '"';

        this.setState(state);
    }

    render(){
        return(
            <Div>
                <img src={require("../../assets/img/biscoito.png")} alt="Biscoito da Sorte" />
                <Botao chamarFuncao={this.abrirBiscoito} />
                <p>{this.state.mensagem}</p>
            </Div>
        );
    }
}

export default BiscoitoSorte;

const Div = styled.div`
    img {
        height: 250px;

        width: 250px;
    }

    p   {
        font-size: 14px;

        font-style: italic;

        padding-top: 15px;

        text-align: center;
    }
`;