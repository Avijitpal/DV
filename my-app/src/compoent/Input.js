import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import View from './View'
import CSVReader from 'react-csv-reader'
import {Link} from 'react-router-dom';
import react from 'react';
// heree  we  are importing the ReactFileReader to use it
import ReactFileReader from 'react-file-reader';

import {Bar} from 'react-chartjs-2';
const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class Input extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}
