import React from 'react';

const Task = (props) => {

    const style = {color: 'red'};

    if (props.task.active) {
    return ( 
        <div>
            <p>
            <strong style={props.task.important ? style : null}>{props.task.text}</strong><span>{props.task.date}
            </span><button onClick={() => props.changeStatus(props.task.id)}>I have done it</button>
            <button onClick={() => props.delete(props.task.id)}>x</button>
            </p>
           
        </div>
           
    );} else {
        return(
        <div>
            Task done
        </div>
        )
    }
    
}
 
export default Task;