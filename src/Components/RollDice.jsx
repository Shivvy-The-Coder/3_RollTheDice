import styled from "styled-components";
const RollDice = ({rollDice,currentDice}) => {
return (
     <DiceContainer>
      <div>
        <img 
        onClick={rollDice}
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