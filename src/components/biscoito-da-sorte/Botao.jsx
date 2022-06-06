import styled from 'styled-components';

export default function Botao(props)    {
    return (
       <Div>
           <button onClick={props.chamarFuncao} >Abrir Biscoito</button>
       </Div> 
    );
}

const Div = styled.div`
    button  {
        background-color: #FFFFFF;

        border: 2px solid #00ADE3;

        border-radius: 8px;

        color: #00ADE3;

        padding: 10px;
    }

    button:hover    {
        background-color: #00ADE3;

        color: #FFFFFF;

        cursor: pointer;
    }
`;