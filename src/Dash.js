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
     
      <div class="graphContainer">
        <div class="btn-group">
          <a href="#graphGeral"><button class="tablinks" >Colheita Total</button></a>
          <a href="#graphEsp_1"><button class="tablinks" >Temporadas de Colheita</button></a>
          <a href="#graphEsp_2"><button class="tablinks" >Mais alguma coisa</button></a>
        </div>
      
      
        <div id="graphGeral" class="tabcontent">
        <h3>Colheita Total</h3><br/>
    
    
    </div>
      
      <div id="graphEsp_1" class="tabcontent">
        <h3>Temporadas de Colheita</h3><br/>
        <div class="graphs">
        <p>Grafico vai aqui</p>
      </div>

      </div>
      
      <div id="graphEsp_2" class="tabcontent">
        <h3>Mais alguma coisa</h3><br/>
        <div class="graphs">
        <p>Grafico vai aqui</p>
      </div>

      </div>
    </div>

    );
  }
}

export default Dash;