import React, { Component } from 'react';
import { Router } from 'react-router-dom'; //listens for URL change
import history from './history'

import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import './styles/styles.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      renderComponent: ''
    }
  }


  render() {
    return (
      <div className="App">
      <Router 
      basename={"/"} 
      history={history}
      >
        <React.Fragment>
          <Header />
          <Content /> 
          <Footer />
        </React.Fragment>
      </Router>
      </div>
    );
  }
}

export default App;
