// import React, { useEffect, useState } from 'react'
// import { Table } from '@mui/material'
// import "./Routing.css"


// export default function Routing() {

// const [data,setdata]= useState([])

//     useEffect(()=>{
//    fetch("http://localhost:5000/list").then((resp)=>{
//         resp.json().then((resp)=>{
//         console.log(resp)
        
//         setdata(resp)
//         })
//          })
// },[])

// function del(){

    
//         fetch(`http://localhost:5000/delete/${_id}`,{
//             method:"DELETE"
//         }).then((resp)=>{
//              resp.json().then((resp)=>{
//              console.log(resp)
             
             
//              })
//               })
     


// alert("del")

// }


//     return (
//     <div>
//     <h1>Call API</h1>
  
//          <Table border="2px"  variant="dark" > 
//    <tr>
//  <th>id</th>
 
// <th>Title</th>
// <th>Price</th>
// <th>Category</th>
// <th>Delete</th>

//    </tr>
// <tr>

// {
//                 data.map((item)=>

//                 <tr>
//                   <td>{item._id}</td>
//                   <td>{item.name}</td>
//                   <td>{item.price}</td>
//                   <td>{item.category}</td>
//                   <td> <button onClick={del} type="Delete"> del</button></td>
    
//                 </tr>
//                 )
//               }







// </tr>
  
       



//         </Table>
    
//     </div>
//   )
// }
