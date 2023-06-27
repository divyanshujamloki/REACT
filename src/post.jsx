// import React, { useState } from 'react'

// export default function Post() {
  
//     const [name,setname]=useState("")
//     const [price,setprice]=useState("")
//     const [category,setcategory]=useState("")
 
    
   
  
//     function app(e)
//     {  e.preventDefault()
//       let data={name,price,category}
//     // console.warn(data);
//       fetch("http://localhost:5000/create", {
//         method: "POST",
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body:JSON.stringify(data)
//       }).then((resp)=>{
//         // console.warn("resp",resp);;
//         resp.json().then((result)=>{
//           console.warn("result",result)
//         })
//       })
//     }


  
//     return (
//     <div>
//       <form onSubmit={app}>
//         <input type='text'  placeholder='name' onChange={(e)=>setname(e.target.value)}/><br/><br/>
//         <input type='text' placeholder ='price'  onChange={(e)=>setprice(e.target.value)}/><br/><br/>
//         <input type='text' placeholder='category' onChange={(e)=>setcategory(e.target.value)}/><br/><br/>
//         <button onClick={app} type='submit'>click me</button>
//       </form>
//     </div>
//   )
// }
