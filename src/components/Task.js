import React from 'react';

const Task = (props) => {
    return ( 
        <div>
            <p>
                {props.task.text}
            </p>
        </div>
           
    );
    
}
 
export default Task;