import React, { Component } from 'react';
import './App.css';

import NavMenu from "./components/NavMenu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavMenu />
      </div>
    );
  }
}

export default App;
