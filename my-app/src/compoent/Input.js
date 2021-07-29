//import React, { Component } from 'react'
import { useState } from "react";
import React from "react";
function Form(){
 const [Amount,setAmount] = React.useState(0);
 const [Month,setMonth] = React.useState("January");
 const values=[];
 //var data=[];
 const [quants,setquants] = useState({});
  // Form submitting logic, prevent default page refresh 


  const handleSubmit= event => {
    //here we are pushing the data into the array
    values.push({"Amount":Amount ,"Month":Month});
    //data = [...values];
    setquants({
      ...quants,"Amount":{...(quants[values.Amount]??{}),"Month":event.target.value}
    })

    console.log(JSON.stringify(quants));
    //console.log(JSON.stringify(data))
    event.preventDefault();
  }

  
  // Return a controlled form i.e. values of the 
  // input field not stored in DOM values are exist 
  // in react component itself as state


    return(
      <form onSubmit={handleSubmit}>
        <div>
        {/*This is the Amount selection */}
          <label htmlFor='Amount'>Amount</label>
          <input 
            name='Amount'
            type = "number"
            value = {Amount}
            onChange={e=>setAmount(e.target.value)}
            required 
          />
        </div>
         {/*This is the for the Selecting the month */}
        <div >
          <label htmlFor='Month'>Month</label>
           <select name='Month' value={Month} 
           onChange={e=>setMonth(e.target.value) } required >
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
      {/*Button  to add the value  */}
        <div>
          <button  >ADD</button>
        </div>

      </form>
    )
  }
export default Form
//1.placeholder needs to be added