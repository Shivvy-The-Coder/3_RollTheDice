import styled from "styled-components"

const NumberSelector = ({setError,setSelectedNumber,selectedNumber,error}) => {

    const array=[1,2,3,4,5,6];

    const NumberSelectorHandle=(number)=>{
      setSelectedNumber(number)
      setError("")
    }

    // creating a usestate hook soo  that we user can select the number


  return (
    
    <NumberSelectorContainer>

      <p className="error">{error}</p>
    <div className="flex">
      {
        array.map((number,index) => (
        <Box
        isSelected={selectedNumber==number}
        key={index} onClick={()=>NumberSelectorHandle(number)}>
          {number}</Box>
          ))}
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  )
}



const NumberSelectorContainer= styled.div`
  .flex{
    display: flex;
    gap:24px;
  }

  p{
    font-size: 24px;
    font-weight: 700;
  }
  display: flex;
  flex-direction: column;
  align-items: end;

  .error
  {
    color: red;
  }
`;





export default NumberSelector;

const Box = styled.div`
width: 72px;
height: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
cursor:pointer;
background-color: ${(props)=>(props.isSelected?"black" :"white")};
           color: ${(props)=>(!props.isSelected?"black" :"white")};
`;