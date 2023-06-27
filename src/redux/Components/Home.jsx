import React from 'react'
import "../Components/Home.css"
import { border } from '@mui/system'
import cardItem from '../Services/Reducers/Reducer';
export default function Home(props) {
  console.warn("home",props);
  return (
    <div>
     <div>
           
           <h1>Home Component</h1>
           <span>{props.Data.length}</span>
           <div>
             <div className="add-to-cart" >
    <span className="cart-count"></span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
        </div>
           <div className="cart-wrapper" >
               <div className="img-wrapper item">
                   <img src="data:image/jpeg;base64,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" alt='img' />
               </div>
               <div className="text-wrapper item">
                   <span>
                       I-Phone
                   </span>
                   <span>
                       Price: $1000.00
                   </span>
               </div>
               <div className="btn-wrapper item">
                   <button onClick={()=>{
                    props.addToCartHandler({
                      name:"iphone",price:1000,
                    })
                   }}>
                       Add To Cart</button>
               </div>

               <div className="btn-wrapperr item ">
                   <button  
                   onClick={()=>
                    props.removeToCartHandler({
                      name:"iphone"
                    })
                   }>
                       Remove To Cart</button>
               </div> 
           </div>
       </div>
      
    </div>
  )
}
