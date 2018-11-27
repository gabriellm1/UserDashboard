import React, { Component } from 'react';
import logo from './logo.svg';
import './Dash.css';
import { Link, Element , Events, animateScroll as scroller } from 'react-scroll'
import Chart from './Chart';
import Chart1 from './Chart1';
import Chart2 from './Chart2';



class App extends Component {

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
  
                <li><Link activeClass="active" className="GraphGeral" to="GraphGeral" spy={true} smooth={true} duration={500} >Colheita Total CSA-SP</Link></li>
                <li><Link activeClass="active" className="GraphEsp_1" to="GraphEsp_2" spy={true} smooth={true} duration={500}>Colheita do Usuário</Link></li>
                <li><Link activeClass="active" className="GraphEsp_2" to="GraphEsp_1" spy={true} smooth={true} duration={500} >Temporada de Colheita</Link></li>
             
              </ul>
            </div>
          </div>
        </nav>
  
        <Element name="GraphGeral" className="element" >
        Total Absoluto
        <div className="App">
          <Chart/>
        </div>
        </Element>
        
        <Element name="GraphEsp_2" className="element">
          Colheita do Usuário
        <div className="App">
          <Chart2/>
        </div>
        </Element>
        
        <Element name="GraphEsp_1" className="element">
        Temporada de Colheita
        <div className="App">
          <Chart1/>
        </div>
        </Element>

     

      </div>

);
}
};

export default App;
