import { useState } from "react";
import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";


function App() {
  // using this we are going to change the page to another when the user clicks on the button 
  const [isGameStarted,setIsGameStarted]=useState(true);



  const toggleplay=()=>{
    setIsGameStarted((prev)=>!prev)
  };
  

  return (
    <>
      {isGameStarted?<GamePlay/> : <StartGame toggle={toggleplay}/>}
    </>
  )
}

export default App;