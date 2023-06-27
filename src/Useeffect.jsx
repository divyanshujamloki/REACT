import React, { useState } from 'react'
import { useEffect } from 'react'
import style from "./App.css"
// import { Alert,Breadcrumb } from 'bootstrap'
import {Alert,Breadcrumb} from 'react-bootstrap';

export default function Useeffec() {
 

   

const [data,setdata] = useState(0)
const [count,setcount]= useState(10)


useEffect(()=>{

    console.log("count")
},[count])

useEffect(()=>{

    console.log("data")
},[data])
  return (
    <div>
       <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  
      <h1>Useeffect</h1>
      <h1>{data}</h1>
    <button onClick={()=>setdata(data+1)}>click data</button>
    <h1 className='hi'>hello world1</h1>
    <h1 className={style.hi}>hello world2</h1>
    {
        <Alert variant="success">
          This is a  alert—check it out!
        </Alert>
      }
    <h1 style= {{color:"white",backgroundColor:"black"}}>hello world3</h1>
    <h1>{count}</h1>
    <button onClick={()=>setcount(count+1)}>click count</button>
    </div>
  )
}
