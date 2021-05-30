import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import View from './View'
import CSVReader from 'react-csv-reader'
import {Link} from 'react-router-dom';


//const event;
class Input extends Component {
      handleClick = () =>{
          console.log('yep this is working');
      }
    
    render() {
        return (
          <div>
             <CSVReader onFileLoaded={(data, fileInfo) => console.dir(data, fileInfo)} />,
             <button onClick={this.handleClick }>Submit</button>
          </div>
        )
      }
}
export default Input
