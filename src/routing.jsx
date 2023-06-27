// import React, { useEffect, useState } from 'react'
// import { Table } from '@mui/material'
// import "./Routing.css"

// export default function Routing() {

// const [data,setdata]= useState([])

//     useEffect(()=>{
//    fetch("https://fakestoreapi.com/products?limit=5").then((resp)=>{
//         resp.json().then((resp)=>{
//         console.log(resp)
        
//         setdata(resp)
//         })
//          })
// },[])


// // : 
// // category
// // : 
// // "men's clothing"
// // description
// // : 
// // "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// // id
// // : 
// // 1
// // image
// // : 
// // "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// // price
// // : 
// // 109.95
// // rating
// // : 
// // {rate: 3.9, count: 120}
// // title
// // : 
// // "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
// //  console.warn(resp);
//     return (
//     <div>
//     <h1>Call API</h1>
//         {/* <h1>{
//         data.map((item)=>
//         <>
//         {item.id}
//           {item.category}
//         {item.title}
//           {item.name}
         
//         </>
         

//         )
        
//         }</h1> */}

// {/* 
//         {
//                     id:1,
//                     title:'...',
//                     price:'...',
//                     category:'...',
//                     description:'...',
//                     image:'...'
//                 }, */}
//         <Table border="2px"  variant="dark" >
//    <tr>
//  <th>id</th>
 
// <th>Title</th>
// <th>Price</th>
// <th>Category</th>

//    </tr>
// <tr>

// {
//                 data.map((item)=>

//                 <tr>
//                   <td>{item.id}</td>
//                   <td>{item.title}</td>
//                   <td>{item.price}</td>
//                   <td>{item.category}</td>
//                   <td> <div className="card" style={{width:"18rem"}}>
//   <img className="card-img-top" src={item.image} alt="Card image cap"/>
  
  
// </div> 

// </td>
//                 </tr>
//                 )
//               }







// </tr>
  
       



//         </Table>
    
//     </div>
//   )
// }
