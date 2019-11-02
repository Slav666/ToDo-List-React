import React from 'react';

const Task = (props) => {
    return ( 
        <div>
            <p>
            {props.task.text}<span>{props.task.date}</span><button>I have done it</button><button>x</button>
            </p>
           
        </div>
           
    );
    
}
 
export default Task;