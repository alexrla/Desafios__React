import React, {useState} from "react";

import styled from 'styled-components';

export default function MegaSena(props) {

    function gerarNumerosAleatorios(minimo, maximo, array)    {
        const numeroAleatorio = parseInt(Math.random() * ((maximo - minimo) + 1) + minimo);
    
        return array.includes(numeroAleatorio) ? gerarNumeros(minimo, maximo, array) : numeroAleatorio;
    }
    
    function gerarNumeros(quantidade)   {
        const numeros = Array(quantidade).fill(0).reduce((numero) => {
            const novoNumero = gerarNumerosAleatorios(1, 60, numero);
            return [...numero, novoNumero];
        }, []).sort((numero1, numero2) => numero1 - numero2);
    
        return numeros;
    }

    const [quantidade, setQuantidade] = useState(props.quantidade || 6);

    const numerosIniciais = Array(quantidade).fill(0);
    
    const [numeros, setNumeros] = useState(numerosIniciais);
    

    return (
        <Container>
            {/* <div>
                {numeros.join(" - ")}
            </div> */}

            <ContainerNumero className="numeros">
                {numeros.map((numero) => <div className="numero"><span>{numero}</span></div>)}
            </ContainerNumero>

            <ContainerEntrada className="entrada">
                <label htmlFor="quantidade">Quantidade: </label>
                <input type="number" min={6} max={12} value={quantidade} onChange={evento => setQuantidade(+evento.target.value)} id="quantidade" />
            </ContainerEntrada>

            <button onClick={evento => setNumeros(gerarNumeros(quantidade))}>Gerar Números</button>
        </Container>
    );
}

const Container = styled.div`
    button  {
        background-color: #D6147C;

        border: none;

        border-radius: 20px;

        color: #FFFFFF;

        cursor: pointer;

        padding: 10px;
    }

    button:hover    {
        background-color: #B9006E;
    }
`

const ContainerNumero = styled.div`
    display: flex;

    justify-content: center;

    .numero   {
        align-items: center;

        background-color: #488138;

        border-radius: 50%;

        color: #FFFFFF;

        display: flex;

        height: 50px;

        justify-content: center;

        margin: 0 5px 0;

        width: 50px;
    }
`;

const ContainerEntrada = styled.div`
    margin: 10px 0;
    
    input   {
        width: 50px;
    }    
`;