import React,{ useState } from "react";

const Child = ({ sendData }) => {

   const [input,setInput] = useState('')

   const handleInput = (e) => {
      setInput(e.target.value)
   }

   const updateData = () => {
      sendData(input)
   }

   return (
      <>
         <input type="text" value= {input} placeholder="Enter data" onChange={handleInput}></input>
         <button onClick={updateData}>GET DATA</button>
      </>
   )
}

export default Child;