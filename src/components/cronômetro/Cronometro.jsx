import React, { Component } from 'react';

import styled from 'styled-components';

import cronometo from '../../assets/img/cronometro.png';

class Cronometro extends Component  {
    constructor(props)  {
        super(props);

        this.state = {
            numero: 0,
            botao: "Iniciar"
        };

        this.timer = null;

        this.redefinir = this.redefinir.bind(this);
        this.iniciar = this.iniciar.bind(this);
    }

    redefinir() {
        if(this.timer !== null) {
            clearInterval(this.timer);

            this.timer = null;
        } 

        let state = this.state;

        state.numero = 0;

        state.botao = "Iniciar";

        this.setState(state);
    }

    iniciar()   {
        let state = this.state;

        if(this.timer !== null) {
            clearInterval(this.timer);

            this.timer = null;

            state.botao = "Iniciar";
        } 
        else    {
            this.timer = setInterval(() => {
                let state = this.state;
                
                state.numero += 0.1;
    
                this.setState(state);
            }, 100);

            state.botao = "Pausar";
        }

        this.setState(state);
    }

    render()    {
        return (
            <Div>
                <DarkOverlay>
                    <img src={cronometo} alt="Relógio" />

                    <p>{this.state.numero.toFixed(1)}</p>

                    <div className="botoes">
                        <button className="redefinir" onClick={this.redefinir}>Redefinir</button>
                        <button className="iniciar" onClick={this.iniciar}>{this.state.botao}</button>
                    </div>
                </DarkOverlay>
            </Div>
        );
    }
}

export default Cronometro;

const Div = styled.div`
    align-items: center;

    display: flex;

    height: 100%;    

    justify-content: center;
`;

const DarkOverlay = styled.div`
    align-items: center;

    display: flex;

    flex-direction: column;

    height: 250px;

    justify-content: center;

    position: relative;

    width: 250px;

    img     {
        height: 150px;

        width: 150px;
    }

    p   {
        color: #FFFFFF;

        position: absolute;

        top: 84px;
    }

    div button {
        border-radius: 5px;

        cursor: pointer;

        margin: 15px;

        padding: 10px;
    }

    .redefinir  {
        background-color: #FFFFFF;

        border: 2px solid #75AE75;

        color: #75AE75;
    }

    .redefinir:hover    {
        background-color: #75AE75;

        color: #FFFFFF;
    }

    .iniciar    {
        background-color: #FFFFFF;

        border: 2px solid #5F679D;

        color: #5F679D;
    }

    .iniciar:hover    {
        background-color: #5F679D;

        color: #FFFFFF;
    }
`;