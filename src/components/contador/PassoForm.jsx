import React from "react";
import styled from 'styled-components';

export default function PassoForm(props)  {
    return (
        <div>
            <Content className="passo">
                <label htmlFor="passoInput">Passo: </label>
                <input type="number" value={props.passo} onChange={(evento) => props.setPasso(+evento.target.value)} id="passoInput" />
            </Content>
        </div>
    );
}

const Content = styled.div`
    display: flex;
  
    justify-content: center;

    margin-top: 10px; 
    
    label   {
        margin-right: 10px;
    }

    input {
        font-size: 1.2rem;
    
        padding-left: 5px;
    
        width: 50px;
    }
`;