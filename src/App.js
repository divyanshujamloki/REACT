import './App.css';
import React from 'react'
// import Control from './control';
// import Student from './user';
// import Get from './Get';
// import {
//   BrowserRouter,
//   Routes,
//   Route,Link,Switch
// } from "react-router-dom";

// import Child2 from './Child2';
// import Routing from './routing';
// import { useEffect,useState } from 'react';
// import Practice from './practice';
// import Webstore from './Webstore';
// import Post from './post';
// import Pre from './pre';
// import { Provider } from 'react';
import Home from './redux/containers/HomeContainer';
import Axios from './Axios';
import Test from './test';

// import Home from './redux/Components/Home';

 function App() {
 
  
//   let user=[
//     {name:'anil',id:1},
//     {name:'peter',id:2},
//     {name:'bruce',id:3},
//     {name:'tony',id:4},
//   ]
  

return (<>
{/* <Test data={{name:"Divyanshu"}}/> */}
<Axios/>

<Home/>
{/* <Home/> */}


  </>
      );

}

export default App;