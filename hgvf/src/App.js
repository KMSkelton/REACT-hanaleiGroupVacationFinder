import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'; //listens for URL change
import history from './history'

import './App.css';
import Header from './components/Header'
import Content from './components/Content'
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
      <BrowserRouter 
      basename={"/"} 
      history={history}
      >
        <React.Fragment>
          <Header />
          <Content /> 
        </React.Fragment>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
