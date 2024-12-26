
import styled from "styled-components"

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



const Button = styled.button`
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


