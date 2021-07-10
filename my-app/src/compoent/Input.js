import React, { Component } from 'react'



class Inputfield extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     maindata: {
      //  months:0,
        Amount: 0,
        numberofmonths:0
      }
    };

    //this.handleInputChange1= this.handleInputChange1.bind(this);
    this.handleInputChange1= this.handleInputChange1.bind(this);
    this.handleInputChange2= this.handleInputChange2.bind(this);

  }

  //handleInputChange1(event) {
   //  var data1 = this.state.maindata;
     // data1.months = event.target.value;
      //value = {this.state.maindata.months};
    //this.setState({
    //  miandata : data1
    //});
 // }
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
    handleSubmit(event){
         console.log(this.state.maindata);
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
      <form>
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
         <button  onSubmit={this.handleSubmit.bind(this)}>Submit</button>
      </form>
      </div>
    );
  }
}

export default Inputfield