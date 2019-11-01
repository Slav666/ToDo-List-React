import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';


class App extends Component {
  render() {
    return (
      <div className="App">
      ToDo List
      <AddTask/>
      </div>
    );
  }
}

export default App;
