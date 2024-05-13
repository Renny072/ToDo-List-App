import React from 'react';
import Task from './Task/Task';
import './Tasks.scss';
import { GrClearOption } from "react-icons/gr";

function Tasks({ tasks, onStatusChange, onTaskRemove, onClearTasks }) {
    return (
        <>
            <div className="tasksHeader">
                <h2>These are the tasks:</h2>
                <button onClick={onClearTasks} className="clearTasksButton"><GrClearOption /> Clear Tasks</button>
            </div>

            <div className="tasksContainer"> 
                {tasks.map((task, index) => {
                    console.log('Rendering task:', task); 
                    return (
                        <Task
                            key={index}
                            task={task}
                            onStatusChange={onStatusChange}
                            onTaskRemove={onTaskRemove}
                        />
                    );
                })}
            </div>
            
            <hr />
        </>
    );
}

export default Tasks;
