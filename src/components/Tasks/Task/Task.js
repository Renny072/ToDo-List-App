import './Task.scss';
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { IoCheckmarkDone } from "react-icons/io5";
import { FaMapPin } from "react-icons/fa";


function Task(props) {
    const handleStatusClick = () => {
        const id = props.task.id;
        props.onStatusChange(id);
    };

    const handleRemoveClick = () => {
        const id = props.task.id;
        props.onTaskRemove(id);
    };
    
    return (
        <div className="taskContainer">
            <hr />

            <div style={{ textAlign: 'center',color: "#373737"}}> 
                <FaMapPin /> 
            </div>

            <h3>{props.task.description}</h3>
            <div className="taskId">Id: {props.task.id}</div> 

            <div>
                Status: <span className={props.task.done ? 'statusCompleted' : 'statusOpen'}>
                {props.task.done ? (
                    <>
                       <IoCheckmarkDone />Completed 
                    </>
                ) : 'Open'}
                </span>
            </div>

            <div className="buttonsContainer">
                <button onClick={handleStatusClick} className="changeStatusButton">
                    <MdOutlinePublishedWithChanges />Change Status
                </button>
                <button onClick={handleRemoveClick} className="removeTaskButton">
                    <FaTrashAlt />Remove Task
                </button>
            </div>

        </div>
    );
}

export default Task;
