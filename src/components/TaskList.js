import React from 'react';
import Task from './Task'

const TaskList = (props) => {

    const tasks = props.tasks.map(task => <Task key={task.id} task={task}/>)
    return ( 
        <>
            <div className="active">
                <h1>Tasks to do</h1>
                {tasks}
            </div>
            <hr/>
            <div className="done">
                <h2>Tasks finalised (0)</h2>
            </div>
        </>
        
    );
    
}
 
export default TaskList;