import NumberSelector from "./NumberSelector"
import RollDice from "./RollDice"
import Score from "./TotalScore"
import styled from "styled-components"
import React,{useState} from "react"
import { Button } from "../styled/button"

const GamePlay = () => {
  const [selectedNumber , setSelectedNumber] = useState(null); 
  const [currentDice , setCurrentDice]=useState(1);
  const [score,setScore]= useState(0);  
  const [error,setError]=useState("");

  const generateRandomNumber=(min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
  };


  const rollDice=()=>{
    if(!selectedNumber) {
      setError("YOu have not selected any Number")
      return;}
    const randomNumber=generateRandomNumber(1,7);
    setCurrentDice((prev)=>randomNumber);

    if(selectedNumber==randomNumber)
      setScore((prev)=>prev+randomNumber);
    else
    setScore((prev)=>prev-2);

    setSelectedNumber(undefined);
  };



  return (
    <main>  
      <Main>
        <div className="top_Section">
        <Score score={score} />
        <NumberSelector       setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
        </div>
        <RollDice currentDice={currentDice} rollDice={rollDice}/>

         <div className="btns">
          <Button>Rest Score</Button>
          <Button>Show Rules</Button>
        </div> 
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

    .btns{
      height: 20px;
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
      gap: 24px;

  }
`;