//import React, { Component } from 'react'
//import { useState } from 'react';
import React from "react";

class Inputfield extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //  months:0,
        Amount: [],
        numberofmonths:[],
        whichmonth:'',
    };    
    this.handleInputChange1= this.handleInputChange1.bind(this);
    this.handleInputChange2= this.handleInputChange2.bind(this);
    this.handleInputChange3= this.handleInputChange3.bind(this);
    
     
  }
   
  handleInputChange1(event) {
       var data1 = this.state;
       data1.Amount = event.target.value;
       this.setState({
         Amount:data1
       });
    }
    handleInputChange2(event) {
       var data2 = this.state;
       data2.numberofmonths = event.target.value;
       this.setState({numberofmonths:data2});
    } 
    handleInputChange3(event){
      var data3 = this.state;
      data3.whichmonth = event.target.value;
      this.setState({whichmonth:event.target.value});
    } 
    handleSubmit(event){
      event.preventDefault();
      const data1 = event.target.value;
     // 
      console.log(data1);
     }

      addthedata(event){
        event.preventDefault();
          console.log("this is working")
        }

  render() {
    return (
      <div>
      <form >
          <label>
          Amount:
          <input name="Amount" type="number"
           value={this.state.Amount} 
           onChange={this.handleInputChange1} />
        </label>
        <button onClick={this.addthedata}>ADD</button>
        <br/>
        <label>
         Number of months:
          <input name="numberofmonths" type="number"
         value={this.state.numberofmonths} 
          onChange={this.handleInputChange2}/>
        </label>
        <button onClick={this.addthedata}>ADD</button>
        <br></br>
        
         Month
        <label>
            <input name="whichmonth" type="text" 
            value={this.state.whichmonth} 
            onChange={this.handleInputChange3} />
        </label>

         <button onClick={this.addthedata}>ADD</button>
          <div>
               <button onClick={this.handleSubmit}>CREATE</button>
          </div>
        
      </form>
      </div>
    );
  }
}
export default Inputfield