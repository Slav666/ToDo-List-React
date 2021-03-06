import React from 'react';
import Task from './Task'

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active)

    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} changeStatus={props.changeStatus}/>)
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} changeStatus={props.changeStatus}/>)
    return ( 
        <>
            <div className="active">
                <h1>Tasks to do</h1>
                {activeTasks.length > 0 ? activeTasks : <p>No more tasks left</p>}
            </div>
            <hr/>
            <div className="done">
                <h2>Tasks finalised <em>({done.length})</em></h2>
                {doneTasks}
            </div>
        </>
        
    );
    
}
 
export default TaskList;