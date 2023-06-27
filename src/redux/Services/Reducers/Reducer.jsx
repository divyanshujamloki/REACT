import { ADD_TO_CART,REMOVE_TO_CART } from "../Constants";

const initialState={
    cardData:[]
}

export default function cardItem(State=[],action){

   switch (action.type){
    case ADD_TO_CART:
        console.log("red",action)
        return[

        
               ...State,
         { cardData: action.data}
              
                  
        ]
        break;
        case REMOVE_TO_CART:
            
            State.pop();
            return[
                 
                  ...State,
                 
                      
            ]
            break;    

            default:return State

   }
   

}