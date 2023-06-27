import React from 'react'
import Home from "../Components/Home"
import {connect} from "react-redux"
import {addToCart,removeToCart} from "../Services/Actions/Action"


const mapState = state=>({
 Data:state.cardItem
  //
})

const mapDispatch = dispatch=>({
  addToCartHandler:data=>dispatch(addToCart(data)),
  removeToCartHandler:data=>dispatch(removeToCart(data))
}

)
export default connect(mapState,mapDispatch)(Home)

// export default Home
