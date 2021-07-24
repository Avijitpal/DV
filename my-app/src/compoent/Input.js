//import React, { Component } from 'react'
import React from "react";
function Form(){
 const [Amount,setAmount] = React.useState(0);
 const [Month,setMonth] = React.useState("");
 const values=[];
 const data=[];
  // Form submitting logic, prevent default page refresh 
  const handleSubmit= event => {
    //here we are pushing the data into the array
    values.push({"Amount":Amount ,"Month":Month});
    data =[...values];
    console.log(data)
    event.preventDefault();
  }

  
  // Return a controlled form i.e. values of the 
  // input field not stored in DOM values are exist 
  // in react component itself as state


    return(
      <form onSubmit={handleSubmit}>
        <div>
        {/*This is the Amount selection */}
          <label htmlFor='email'>Amount</label>
          <input 
            name='Amount'
            type = "number"
            value = {Amount}
            onChange={e=>setAmount(e.target.value)}
            required 
          />
        </div>
        <div >
          <label htmlFor='Month'>Month</label>
           <select name='Month' value={Month} onChange={e=>setMonth(e.target.value) } required >
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
export default Form
//1.placeholder needs to be added
//