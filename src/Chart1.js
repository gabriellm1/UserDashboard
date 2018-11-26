
import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart1 extends Component{
  constructor(props){
    
    super(props);
    this.state = {
      chartData:{
        labels: ['Total (kg)', 'Berços'],
        datasets:[
          {
            
            data:[
            4,
              45
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
            ]
          }
        ]
      }
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: false,
    legendPosition:'bottom',
  }

  render(){
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Total Usuário',
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

export default Chart1;