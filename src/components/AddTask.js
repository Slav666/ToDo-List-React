
import React, {Component} from 'react';


class  AddTask extends Component {

    minDate = new Date().toISOString().slice(0,10);

    state = { 
        text: '',
        checked: false,
        date: this.minDate
    }

     handleDate = (e) => {
        this.setState(
            {date: e.target.value})
     }

     handleText = (e) => {
         this.setState(
            {text: e.target.value}
         )
     }

     handleCheckeBox = (e) => {
        this.setState(
           {checked: e.target.checked}
        )
    }
// handleClick method to clear an user input
    handleClick = () => {
        console.log("Add object");
        const add = this.props.add(this.state.text, this.state.checked, this.state.date);
        if(add) {
            this.setState({
                text: '',
                checked: false,
                date: this.minDate
            })
        }
    }
    render() { 
        let maxDate = this.minDate.slice(0,4) * 1 + 1;
        maxDate = maxDate + "-12-31";
        return ( 
            <div className="form">
                <input type="text" placeholder="Add Task" value={this.state.text} onChange={this.handleText}/>
                <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheckeBox}/>
                <label htmlFor="important">Priority</label>
                <br/>
                <label htmlFor="date">When should be finised:</label>
                <input type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate}/>
                <button id="addTaskButton"onClick={this.handleClick}>ADD TASK</button>
            </div>
        );
    }
}
 
export default AddTask;