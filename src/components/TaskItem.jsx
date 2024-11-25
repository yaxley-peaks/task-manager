import PropTypes from "prop-types";
import {useState} from "react";

export function TaskItem(props) {
    const [status, setStatus] = useState(props.task.completed);
    const handleStatusChange = (e) => {
        setStatus(e.target.checked);
    }
    const wrapItemInStrikeThrough = (text, status) => {
       if (status) {
           return <s>{text}</s>;
       }else {
           return text;
       }
    }
    return <li className="p-1 m-1 text-xl">
        <input type={"checkbox"} onChange={handleStatusChange} className="m-1" checked={status}/>
        {wrapItemInStrikeThrough(props.task.title, status)}

    </li>;
}

TaskItem.propTypes = {
    onChange: PropTypes.func,
    task: PropTypes.any
};
