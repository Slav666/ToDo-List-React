import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';


class App extends Component {

  state = {
    tasks: [
      {
      id: 0,
      text: 'play in The Witcher 3 gamme ',
      date: '2019-11-01',
      important: true,
      active: true,
      finishDate: null,
    },
    {
      id: 1,
      text: 'Learn React every day ',
      date: '2019-11-01',
      important: true,
      active: true,
      finishDate: null,
    },
    {
      id: 2,
      text: 'Become the local gym member ',
      date: '2019-11-01',
      important: true,
      active: true,
      finishDate: null,
    },
    {
      id: 3,
      text: 'Start to build new plastic model ',
      date: '2019-11-01',
      important: true,
      active: true,
      finishDate: null,
    },
    ]
  }

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.indexOf(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({tasks})
    // console.log(tasks)
    // console.log("delete element with id " + id)
  }

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks]
  tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    })
    this.setState({tasks})
    // console.log("change element with id " + id)
  }
  render() {
    return (
      <div className="App">
      ToDo List
      <AddTask/>
      <TaskList tasks={this.state.tasks} delete={this.deleteTask} changeStatus={this.changeTaskStatus}/>
      </div>
    );
  }
}

export default App;
