import React, {Component} from "react";

import Display from './Display';
import Botoes from './Botoes';
import PassoForm from "./PassoForm";

export default class Contador extends Component {
    state = {
        numero: this.props.valorInicial || 0,
        passo: this.props.passo || 1
    };

    incrementar = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    }

    decrementar = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }

    setPasso = (novoPasso) =>  {
        this.setState({
            passo: +novoPasso
        });
    }

    render()    {
        return (
            <div>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes setIncrementar={this.incrementar} setDecrementar={this.decrementar} />
            </div>
        );
    };
}