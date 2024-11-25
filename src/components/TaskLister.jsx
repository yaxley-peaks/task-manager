import PropTypes from "prop-types";
import {useState} from "react";
import {TaskItem} from "./TaskItem.jsx";


export function TaskLister(props) {
    const [, setChecked] = useState(true);
    const handleTaskMarkAsRead = (e) => {
        setChecked(!e.target.checked);
    }
    return <ol className="list-decimal text-left">
        {props.tasks.map((task) => (<TaskItem key={task.id}
                                                     onChange={handleTaskMarkAsRead} task={task}/>))}
    </ol>;
}

TaskLister.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.any),
};
