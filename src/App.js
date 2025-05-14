import React,{ use,useState } from "react";
import Parent from "./Parent";

const App = () => {

   const [data,setData] = useState({
      'name': "",'email': "",'message': "",'file':""
   })

   const handleChange = (e) => {
      const { name,value } = e.target;
      setData({
         ...data,
         [name]: value
      })
   }


   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(data);
      setData({
         name: '',
         email: '',
         message: '',
         file:''
      });
   };

   return (
      <>
         <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor="name">Name:</label>
               <input
                  type="text"
                  id="name"
                  name="name"
                  value={data.name}
                  required
                  onChange={handleChange}
               />
            </div>

            <div>
               <label htmlFor="email">Email:</label>
               <input
                  type="email"
                  id="email"
                  name="email"
                  value={data.email}
                  required
                  onChange={handleChange}
               />
            </div>

            <div>
               <label htmlFor="message">Message:</label>
               <textarea
                  id="message"
                  name="message"
                  value={data.message}
                  required
                  onChange={handleChange}
               />
            </div>

            <div>
               <label htmlFor="message">File:</label>
               <input
                  type="file"
                  id="file"
                  name="file"
                  value={data.file}
                  required 
                  accept="application/pdf,image/jpeg,image/png"
                  onChange={handleChange}
               />
            </div>

            <button type="submit">Submit</button>
         </form>
      </>
   )
}

export default App;