import PropTypes from "prop-types";
import {useState} from "react";

export function TaskItem(props) {
    const [status, setStatus] = useState(props.task.completed);
    const [taskTitle, setTaskTitle] = useState(props.task.title);
    const [isEditing, setEditing] = useState(false);
    const handleStatusChange = (e) => {
        setStatus(e.target.checked);
    }
    const wrapItemInStrikeThrough = (text, status) => {
        if (status) {
            return <s>{text}</s>;
        } else {
            return text;
        }
    }
    let renderedJsx = null;

    switch (isEditing) {
        case true:
            renderedJsx = (<li className="p-1 m-1 text-xl" key={props.task.id}>
                <input type="text" value={taskTitle} onChange={(e) => (setTaskTitle(e.target.value))}/>
                <button className="m-1 p-1" onClick={() => setEditing(false)}>Save</button>
            </li>);
            break;
        case false:
            renderedJsx = (<li className="p-1 m-1 text-xl" key={props.task.id}>
                <input type={"checkbox"} onChange={handleStatusChange} className="m-1" checked={status}/>
                {wrapItemInStrikeThrough(taskTitle, status)}
                <button className="m-1 p-1" onClick={() => setEditing(true)}>Edit</button>
                <button className="m-1 p-1">Delete</button>
            </li>);
            break;
        default:
            break;
    }


    return renderedJsx;
}

TaskItem.propTypes = {
    onChange: PropTypes.func, task: PropTypes.any, tasks: PropTypes.arrayOf(PropTypes.any),
};
