import React, { Component } from 'react'
//import { useState } from 'react';
//import React from "react";
class Form extends Component{
  constructor(props){
    super(props)
    this.state = { 
      arr:[{Amount:0, Month:''}],
      data:[]
  }//age:null, address:'',phoneNo:''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  // Form submitting logic, prevent default page refresh 
  handleSubmit(event){
    //const { Amount, Month}=this.state//age, address, phoneNo } = this.state
    event.preventDefault()
    let values = [];
      values.push({
        Amount:this.state.Amount,
        Month:this.state.Month
      });
  let data = [];
  data.push({values})
      console.log(JSON.stringify(data))
      this.setState({values});
  }
  handleChange(event){
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name] : event.target.value
    })
  }

  
  // Return a controlled form i.e. values of the 
  // input field not stored in DOM values are exist 
  // in react component itself as state
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
        {/*This is the Amount selection */}
          <label htmlFor='email'>Amount</label>
          <input 
            name='Amount'
            placeholder='Amount' 
            value = {this.state.Amount}
            onChange={this.handleChange}
          />
        </div>
        {/*This is for the month selection*/}
        <div>
          <label htmlFor='Month'>Month</label>
           <select name='Month' value={this.state.value} onChange={this.handleChange}>
           <option name='Month' value="January">January</option>
           <option name='Month' value="February">February</option>
           <option name='Month' value="March">March</option>
           <option name='Month' value="April">April</option>
           <option name='Month' value="May">May</option>
           <option name='Month' value="June">June</option>
           <option name='Month' value="July">July</option>
           <option name='Month' value="August">August</option>
           <option name='Month' value="September">September</option>
           <option name='Month' value="October">October</option>
           <option name='Month' value="November">November</option>
           <option name='Month' value="December">December</option>
           </select>
        </div>
        <div>
          <button >ADD</button>
        </div>
      </form>
    )
  }
}
  
export default Form
//1.placeholder needs to be added
//