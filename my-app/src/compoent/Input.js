import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import View from './View'
import CSVReader from 'react-csv-reader'
import {Link} from 'react-router-dom';
import react from 'react';
import axios from 'axios';
// heree  we  are importing the ReactFileReader to use it
import ReactFileReader from 'react-file-reader';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookID: '',
      bookTitle: '',
      bookAuthor: '',
    };
  }

  handleInputChange = e => {
    console.log("got the file")
   // this.setState({
   //   [e.target.name]: e.target.value,
   // });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { bookID, bookTitle, bookAuthor } = this.state;

    const book = {
      bookID,
      bookTitle,
      bookAuthor,
    };

    axios
      .post('http://localhost:3001/create', book)
      .then(() => console.log('Book Created'))
      .catch(err => {
        console.error(err);
      });
  };
 // <input
 // type="text"
 // className="form-control"
 // name="bookID"
//  placeholder="Book ID"
 // onChange={this.handleInputChange}
///>

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}/>
            <input type="file" ID="fileSelect" accept=".xlsx, .xls, .csv" onChange={this.handleInputChange}/>
            </div>
           
    );
  }
}
export default Input


