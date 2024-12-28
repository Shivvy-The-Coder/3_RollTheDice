import { useState } from "react";
import styled from "styled-components";
const RollDice = () => {

    const [currentDice , setCurrentDice]=useState(1);

      console.log(currentDice) 

      const generateRandomNumber=()=>{
        return Math.ceil(Math.random()*6);
      }

      const rollDice=()=>{
        const randomNumber=generateRandomNumber();
        setCurrentDice((prev)=>randomNumber);
      }
  return (



    <DiceContainer>

        {/* <button onClick={GenerateRandomDiceNumber}></button>       */}
      <div>
        <img 
        onClick={()=>setCurrentDice(rollDice)}
        src={`/images/Dice/dice_${currentDice}.png`} alt="dice_1" />
      </div>
      <p>
        {currentDice}
      </p>
    </DiceContainer>
  );
}

export default RollDice;

const DiceContainer = styled.div`
margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;
height: calc(100vh-48px);
p{
  font-size: 24px;

}

img
{
  cursor: pointer;
}
`;