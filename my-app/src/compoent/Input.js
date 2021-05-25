import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import View from './View'
import CSVReader from 'react-csv-reader'
import {Link} from 'react-router-dom';

class Input extends Component {
    constructor(props){
        super(props);
        this.state ={
            data: 'hello'
        }
    }
    render() {
       // const list = ["Lebron", "Kobe", "Steph", "Kevin"];
     //   const { value } = this.state;
        return (
            <div>
                <CSVReader onFileLoaded={(data, fileInfo) => console.dir(data, fileInfo)} />
                <button type="button"><Link to="View">Submit</Link></button>
            </div>
        );
    }
}
export default Input
