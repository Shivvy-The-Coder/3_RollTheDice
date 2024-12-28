
import styled from "styled-components";

export const Button = styled.button`
min-width: 220px;
color: white;
padding:10px 18px;
border: none;
background: #000000;
border-radius: 5px;
font-size: 16px;
border:1px solid transparent;
transition: 0.3s background ease-in;

    &:hover
    {
        background-color: white;
        color: black;
        border:1px solid black;
        transition: 0.3s background ease-in;
    }

`;
