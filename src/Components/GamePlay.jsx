import NumberSelector from "./NumberSelector"
import RollDice from "./RollDice"
import Score from "./TotalScore"
import styled from "styled-components"

const GamePlay = () => {
  return (
    <main>  
      <Main>
        <div className="top_Section">
        <Score/>
        <NumberSelector/>
        </div>
        <RollDice/>
      </Main>
    </main>
  )
}

export default GamePlay;


const Main  = styled.div`
    .top_Section
    {
      display: flex;
      justify-content: space-around;
      align-items: end;
      padding-top: 70px;
    }
`;