import React from "react";
import styled from "styled-components";

const Contactus = () => {
    return(
        <Contactusde> 
            <h1>Contact us</h1>
            <button>Click me</button>
        </Contactusde>
    )
};

const Contactusde = styled.div`
    color: white;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`

export default Contactus;