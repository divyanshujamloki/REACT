import { colors } from '@mui/material'
import { click } from '@testing-library/user-event/dist/click'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

export default function Test(props) {
 const [data,setdata]=useState("Cool")
 const [fdata,fsetdata]=useState("anuj")
 const [ddata,ssetdata]=useState(0)
 function New(){
    setdata("badass")
 }

 function New(){
    setdata("badass")
 }
 function add(){
    ssetdata(ddata+1)
 }
 function sub(){
    ssetdata(ddata-1)
 }

 
  
    console.warn(props.data.name)
        let red=props.data.name
   
 {

    if(ddata<0){
        alert("negavtive")
    }
 }

    return (
    <div>
  <h1>{red} is {data}  </h1> 
  <h1>{props.data.age} is {data}  </h1> 
     <button onClick={New}>click here</button>
     <button onClick={add}>click here +</button>
     <button onClick={sub}>click here - </button>
     
     <h1 style= {{color:"red",backgroundColor:"blue"}}>{ddata}</h1>
      
     <Form>
       Name  <input type='text' value={click}/>
             </Form>
 
     
    </div>
  )
}
