import React from 'react';

const Task = (props) => {

    const style = {color: 'red'};
    const {text, date, id, active, important, finishDate} = props.task;

    if (active) {
    return ( 
        <div>
            <p>
            <strong style={important ? style : null}>{text}</strong><span>{date}</span>
            <button onClick={() => props.changeStatus(id)}>I have done it</button>
            <button onClick={() => props.delete(id)}>x</button>
            </p>
           
        </div>
           
    );
} else {
        const finish = new Date(finishDate).toDateString()
        return(
        <div>
            <p>
            <strong>{text}</strong> <em>(Will be done: {date})</em>
            <br/>
            - Task finished: <span>{finish}</span>
            <button onClick={() => props.delete(id)}>x</button>
            </p>
        </div>
        )
    }
    
}
 
export default Task;