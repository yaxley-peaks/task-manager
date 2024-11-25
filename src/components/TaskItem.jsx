import PropTypes from "prop-types";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import {faTrashCan} from "@fortawesome/free-regular-svg-icons";

export function TaskItem(props) {
    const [status, setStatus] = useState(props.task.completed);
    const [taskTitle, setTaskTitle] = useState(props.task.title);
    const [isEditing, setEditing] = useState(false);
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
                <input type="text" value={taskTitle} onChange={(e) => {
                    setTaskTitle(e.target.value);
                    props.onEdit(props.task.id, e.target.value)
                }}/>
                <button className="m-1 p-1" onClick={() => setEditing(false)}>Save</button>
            </li>);
            break;
        case false:
            renderedJsx = (<>
                <li className="p-1 m-1 text-xl" key={props.task.id}>
                    <input type={"checkbox"}
                           onChange={(e) => {
                               setStatus(e.target.checked);
                               props.onDone(props.task.id, e.target.checked)
                           }}
                           className="m-1"
                           checked={status}/>
                    {wrapItemInStrikeThrough(taskTitle, status)}
                    <span className="m-1 whitespace-nowrap">
                    <button className="m-1 p-1" onClick={() => setEditing(true)}>
                        
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    <button className="m-1 p-1" onClick={() => props.onDelete(props.task.id)}>
                        <FontAwesomeIcon icon={faTrashCan} className="text-red-700"/>
                    </button>
                </span>
                </li>
                <hr/>
            </>);
            break;
        default:
            break;
    }


    return renderedJsx;
}

TaskItem.propTypes = {
    onChange: PropTypes.func,
    task: PropTypes.any,
    tasks: PropTypes.arrayOf(PropTypes.any),
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    onDone: PropTypes.func
};
