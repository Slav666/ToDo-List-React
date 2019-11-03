
import React, {Component} from 'react';
import './AddTask.css'

class  AddTask extends Component {
    state = { 
        text: '',
        checked: false,
     }
    render() { 
        return ( 
            <div className="form">
                <input type="text" placeholder="Add Task" value={this.state.text} />
                <input type="checkbox" checked={this.state.checked} id="important"/>
                <label htmlFor="important">Priority</label>
                <br/>
                <label htmlFor="date">When should be finised:</label>
                <input type="date" value="2019-11-03" min="2019-11-01" max="2020-12-01"/>
                <button>ADD</button>
            </div>
         );
    }
}
 
export default AddTask;