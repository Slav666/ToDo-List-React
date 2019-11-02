import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';


class App extends Component {
  render() {
    return (
      <div className="App">
      ToDo List
      <AddTask/>
      <TaskList/>
      </div>
    );
  }
}

export default App;
