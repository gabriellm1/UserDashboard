import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';
import Chart1 from './Chart1';
import Chart2 from './Chart2';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Chart />
        <Chart1 />
        <Chart2 />
      </div>
    );
  }
}

export default App;