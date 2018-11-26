import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart2 extends Component{
  constructor(props){
    
    super(props);
    this.state = {
      chartData:{
        labels: ['Uva', 'Manga','Abacaxi'],
        datasets:[
          {
            label:'Kg',
            data:[
            4,
              45,
              160
             
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)',
              'rgba(255, 100, 64, 0.8)',
              'rgba(255, 99, 132, 0.8)',

            ]
          }
        ]
      }
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'bottom',
  }

  render(){
    return (
      <div className="chart">
        <Pie
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Colhido (kg)',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

      </div>
    )
  }
}

export default Chart2;