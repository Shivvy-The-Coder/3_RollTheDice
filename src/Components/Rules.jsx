import React from 'react'
import styled from 'styled-components';
const Rules = () => {
  return (
    <Rule>
        <h2>How to Play dice Game</h2>
        <p>Select any Number</p>
        <p>Click on Dice Image</p>
        <p>after click on dice of selcted number is equal to dice number you will get same pont as dice {" "}</p>
        <p>if you're guess is wrong w points will deducted</p>
    </Rule>
  )
}

export default Rules;

const Rule= styled.div`
background-color: #FBF1F1;
padding: 20px;
max-width: 800px;
justify-content: center;

h2{
    font-size: 24px;
}

.text{
    margin-top: 24px;
}
`;