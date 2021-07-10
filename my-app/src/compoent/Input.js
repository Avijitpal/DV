//import React, { Component } from 'react'
//import { useState } from 'react';
import React from "react";

class Inputfield extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     maindata: {
      //  months:0,
        Amount: 0,
        numberofmonths:0,
        whichmonth:''
      }
    };


    //this.handleInputChange1= this.handleInputChange1.bind(this);
    this.handleInputChange1= this.handleInputChange1.bind(this);
    this.handleInputChange2= this.handleInputChange2.bind(this);
    this.handleInputChange3= this.handleInputChange3.bind(this);
  }
  //const data =[Amount:]
  
  //handleInputChange1(event) {
   //  var data1 = this.state.maindata;
     // data1.months = event.target.value;
      //value = {this.state.maindata.months};
    //this.setState({
    //  miandata : data1
    //});
 // }
 //const Data = JSON.stringify(Object);

  handleInputChange1(event) {
       var data1 = this.state.maindata;
       data1.Amount = event.target.value;
     
    // value = {this.state.maindata.Amount};
       this.setState({
         maindata:data1
       });
    }
    handleInputChange2(event) {
       var data2 = this.state.maindata;
       data2.numberofmonths = event.target.value;
       this.setState({maindata:data2});
    } 
    handleInputChange3(event){
      var data3 = this.state.maindata;
      data3.whichmonth = event.target.value;
      this.setState({whichmonth:event.target.value});
    } 
    handleSubmit(event){
      event.preventDefault();
         const consoledata = this.state.maindata
         const myJSON = JSON.stringify(consoledata);
         console.log(myJSON);
     }

 // <label>
  //Months:
  //<input>
    //name="mothts"
    //type="text"
    //value={this.state.maindata.months}
  //  onChange={this.handleInputChange1} />
//</label>
//<br />
//<label>

  render() {
    return (
      <div>
      <form  onSubmit={this.handleSubmit.bind(this)}>
          <label>
          Amount:
          <input
            name="Amount"
            type="number"
            value={this.state.maindata.Amount}
            onChange={this.handleInputChange1} />
        </label>
        <br/>
        <label>
         Number of months:
          <input 
          name="numberofmonths"
          type="number"
          value={this.state.maindata.numberofmonths}
          onChange={this.handleInputChange2}/>
        </label>
        <br></br>
         Month
        <label>
            <input name="whichmonth" 
            type="text" 
            value={this.state.maindata.whichmonth} 
            onChange={this.handleInputChange3} />
        </label>
         <button>Submit</button>
      </form>
      </div>
    );
  }
}
export default Inputfield