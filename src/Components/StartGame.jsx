
import styled from "styled-components"
import { Button } from "../styled/button";
const StartGame = ({toggle}) => {
  return (
    <Container>
        <img src="images/dices.png" alt="" />
        <div className="Content">
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame;


const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin:0 auto;
    height: 100vh;
    align-items: center;


    .Content
    {
    h1
    {
        font-size: 96px;
    }
    }

`;



