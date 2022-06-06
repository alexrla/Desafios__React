import React from "react";
import styled from 'styled-components';

export default function Botoes(props)  {
    return (
        <Content className="botoes">
            <button onClick={props.setIncrementar} className="incrementar"> + </button>
            <button onClick={props.setDecrementar} className="decrementar"> - </button>
        </Content>
    );
}

const Content = styled.div`
    display: flex;
  
    justify-content: space-around;

    margin: 10px auto 0;

    width: 100%;
    
    .botoes {
        display: flex;
    
        justify-content: space-around;
    
        margin: 10px auto 0;
    
        width: 50%;
    }
  
    .incrementar,.decrementar {
        align-items: center;
    
        background-color: #1350f7;
    
        border: none;
    
        border-radius: 50%;
    
        color: #ffffff;
    
        cursor: pointer;
    
        display: flex;
    
        font-size: 1.4rem;
    
        height: 30px;
    
        justify-content: center;
    
        overflow: hidden;
    
        width: 30px;
    }
  
    .incrementar:hover,.decrementar:hover {
        background-color: #0236c4;
    }  
`;