import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';


class App extends Component {

  counter = 5;

  state = {
    tasks: [
      {
      id: 0,
      text: 'Play in The Witcher-3 game ',
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
      important: false,
      active: true,
      finishDate: null,
    },
    {
      id: 3,
      text: 'Start to build new plastic model ',
      date: '2019-11-01',
      important: false,
      active: true,
      finishDate: null,
    },
    ]
  }

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
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

  handleAddTask = (text, date, important) => {
    // console.log("Object Added");
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null,
    }
    this.counter++
    // console.log(task, this.counter);
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true;
  }
    

  render() {
    return (
      <div className="App">
      <p className="title">ToDo List</p>
      <AddTask add={this.handleAddTask}/>
      <TaskList tasks={this.state.tasks} delete={this.deleteTask} changeStatus={this.changeTaskStatus}/>
      </div>
    );
  }
}

export default App;
