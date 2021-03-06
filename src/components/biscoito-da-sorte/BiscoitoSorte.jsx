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
                       "A maior barreira para o sucesso é o medo do fracasso.",
                       "Ser você mesmo em um mundo que está constantemente tentando fazer de você outra coisa é a maior realização.",
                       "Os professores abrem a porta, mas você deve entrar por você mesmo.",
                       "Existe apenas um canto do universo que você pode ter certeza de aperfeiçoar, que é você mesmo.",
                       "Você consegue o melhor dos outros quando  você dá o melhor de você mesmo.",
                       "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
                       "Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.",
                       "Cuide-se como se você fosse de ouro, ponha-se você mesmo de vez em quando numa redoma e poupe-se.",
                       "E aí, quando você estiver muito apaixonado por você mesmo, vai poder ser muito feliz e se apaixonar por alguém.",
                       "Durante todo o tempo de tua vida, seja sempre você mesmo, com todas as tuas virtudes e imperfeições. Muitos seriam pessoas melhores se não quisessem ser tão bons.",
                       "E eu ainda escolheria você, mesmo com todas as opções do planeta.",
                       "O que é realmente importante é estar feliz com você mesmo...",
                       "Imagine uma nova história para sua vida e acredite nela.",
                       "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.",
                       "Acredite que você pode, assim você já está no meio do caminho.",
                       "Se você quer um pedacinho do paraíso, acredite em Deus.\nMas se você quer conquistar o mundo, acredite em você\nporque Deus já te deu tudo o que você precisa \npara você vencer."];

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