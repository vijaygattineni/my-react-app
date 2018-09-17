import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro';
import Series from '../../containers/series';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Web Series List</h1>
        </header>
        <Intro message="Welcome to web series" />
        <Series />
      </div>
    );
  }
}

export default App;
