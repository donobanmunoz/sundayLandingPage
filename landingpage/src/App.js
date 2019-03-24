import React, { Component } from 'react';
import './resource/styles.css';
import Header from './components/header_footer/header.js'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
          <p>
            Hola Zulma!!!!
          </p>
      </div>
    );
  }
}

export default App;
