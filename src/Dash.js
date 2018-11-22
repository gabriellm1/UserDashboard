import React, { Component } from 'react';
import logo from './logo.svg';
import './Dash.css';
import Chart from './Chart';

class Dash extends Component {

  // Calls GET data
  // ta pronta
  componentWillMount(){
    this.getChartData();
  }

  
  // fetchs MongoDB data for Charts type graphic  - Monteiro
  getChartData(){

  }

  // Initialize data for use
  constructor(){
    super();
    this.state = {
      // refers data for Chart type graphic
      // cada tipo de gráfico precisa ter essa refêrencia aos dados(exemplo: chartData, mandalaData...)
      chartData:{

      }
    }
  }




  render() {
    return (
      // Vai ter a extrutra criada pelo Leite
      // Por agora criar divs com cada tipo de gráfico

      <div>Quando tiver qualquer coisa, me apagar</div>

    );
  }
}

export default Dash;