import React from 'react';

const Task = (props) => {
    return ( 
        <div>
            <p>
            {props.task.text}<span>{props.task.date}</span><button onClick={() => props.changeStatus(props.task.id)}>I have done it</button><button onClick={() => props.delete(props.task.id)}>x</button>
            </p>
           
        </div>
           
    );
    
}
 
export default Task;