///import logo from './logo.svg';
//import axios from 'axios';
import React, { useState, useEffect } from 'react'
//import {Bar} from 'react-chartjs-2'
//import React from 'react'
///////////form needs to be craeted and search how to create form in reatc js 

class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        months:0,
        Amount: 0,
        numberofmonths:0
      };
  
      this.handleInputChange1= this.handleInputChange1.bind(this);
      this.handleInputChange2= this.handleInputChange2.bind(this);
      this.handleInputChange3= this.handleInputChange3.bind(this);

    }
  
    handleInputChange1(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      //console.log(value)
      this.setState({
        [name]: value
      });
    }
    handleInputChange2(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
      //  console.log(value)
        this.setState({
          [name]: value
        });
      }
      handleInputChange3(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
       // console.log(value)
        this.setState({
          [name]: value
        });
      }  
    handleSubmit(event){
       
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Months:
            <input
              name="mothts"
              type="text"
              value={this.state.months}
              onChange={this.handleInputChange1} />
          </label>
          <br />
          <label>
            Amount:
            <input
              name="Amount"
              type="number"
              value={this.state.Amount}
              onChange={this.handleInputChange2} />
          </label>
          <br/>
          <label>
           Number of months:
            <input 
            name="numberofmonths"
            type="number"
            value={this.state.numberofmonths}
            onChange={this.handleInputChange3}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      );
    }
  }


function App() {
    return (
        <div>
            <Input/>
        </div>
    )
}
export default App
