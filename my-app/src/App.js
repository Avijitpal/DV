///import logo from './logo.svg';
//import axios from 'axios';
//import React, { useState, useEffect, Component } from 'react'
//import {Bar} from 'react-chartjs-2'
import React from 'react'
import { Component } from 'react';
///////////form needs to be craeted and search how to create form in reatc js 
import Input from './compoent/Input'
import View from './compoent/View';
class App extends Component{
  render(){
    return(
      <div> 
          <Input/>
          <View/>
      </div>
    );
  }
}
export default App;