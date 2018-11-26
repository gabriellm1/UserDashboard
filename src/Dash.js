import React, { Component } from 'react';
import logo from './logo.svg';
import './Dash.css';
import Chart from './Chart';
import { Link, Element , Events, animateScroll as scroller } from 'react-scroll'


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

  componentDidMount() {

    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });
  
    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });
  
  }
  
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  
  render () {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
  
                <li><Link activeClass="active" className="GraphGeral" to="GraphGeral" spy={true} smooth={true} duration={500} >Colheita Total</Link></li>
                <li><Link activeClass="active" className="GraphEsp_1" to="GraphEsp_1" spy={true} smooth={true} duration={500}>Temporadas de Colheita</Link></li>
                <li><Link activeClass="active" className="GraphEsp_2" to="GraphEsp_2" spy={true} smooth={true} duration={500} >Test 3</Link></li>
                <li><Link activeClass="active" className="GraphEsp_3" to="GraphEsp_3" spy={true} smooth={true} duration={500}>Mais alguma Coisa</Link></li>
             
              </ul>
            </div>
          </div>
        </nav>
  
        <Element name="GraphGeral" className="element" >
        Colheita Total
        </Element>
  
        <Element name="GraphEsp_1" className="element">
        Temporadas de Colheita
        </Element>
  
        <Element name="GraphEsp_2" className="element">
          test 3
        </Element>
  
        <Element name="GraphEsp_3" className="element">
        Mais alguma coisa
        </Element>
  
      </div>

);
}
};


export default Dash;