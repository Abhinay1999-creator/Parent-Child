import React,{ useState } from "react";
import Child from "./Child";

const Parent = () => {

   const [data,getData] = useState('')

   const getInfo = (data) => {
      getData(data)
   }

   return (
      <>
         <h3>Get Data from Child : {data}</h3>
         <Child sendData={getInfo}></Child>
      </>
   )
}

export default Parent;