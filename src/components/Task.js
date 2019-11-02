import React from 'react';

const Task = (props) => {
    return ( 
        <div>
            <p>
            {props.task.text}<span>{props.task.date}</span><button onClick={()=> console.log("done")}>I have done it</button><button onClick={()=> console.log("delete")}>x</button>
            </p>
           
        </div>
           
    );
    
}
 
export default Task;