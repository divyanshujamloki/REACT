import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter}   from  "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from "redux"
import RootReducers from './redux/Services/Reducers/RootReducers';
import { Provider } from 'react-redux';
const  store = createStore(RootReducers)

const root = ReactDOM.createRoot(document.getElementById('root'));
console.warn("root",store);
root.render(
  <Provider store={store} >
 

  <App />
 
  </Provider>
  
    
 
);


