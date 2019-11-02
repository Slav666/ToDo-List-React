import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';


class App extends Component {

  state = {
    tasks: [
      {
      id: 0,
      text: 'play in The Witcher 3 gamme',
      date: '2019-11-01',
      important: true,
      active: true,
      finishDate: null,
    },
    {
      id: 0,
      text: 'Learn React every day',
      date: '2019-11-01',
      important: true,
      active: true,
      finishDate: null,
    },
    ]
  }
  render() {
    return (
      <div className="App">
      ToDo List
      <AddTask/>
      <TaskList tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
