///import logo from './logo.svg';
import './App.css';
import React from 'react'
//import React, { Componaent } from 'react'
import View from './compoent/View'
import Input from './compoent/Input'
import {BrowserRouter,Route} from 'react-router-dom';

function App() {
  return (
     <BrowserRouter> 
        <div>
           <Input/>
           <Route path="/view" exact component ={View}/>
        </div>
       </BrowserRouter>
  )
}

export default App
