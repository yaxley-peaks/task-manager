import {useState} from "react";
import PropTypes from "prop-types";

AddTask.propTypes = {
    callbackFn: PropTypes.func,
}

export function AddTask(props) {
    const [taskName, setTaskName] = useState('');
    const [taskStatus, setTaskStatus] = useState(0);

    const handleTaskTitleChange = (e) => {
        if (e.target.value === '' || e.target.value === null) return;
        setTaskName(e.target.value);
    }
    const handleTaskStatusChange = (e) => {
        setTaskStatus(e.target.value);
    }

    const handleTaskAddition = () => {
        if (taskName === '' || taskName === null) return;
        props.callbackFn(taskName, taskStatus);
    }

    return <div className="text-center font-sans border-2 rounded-2xl m-4">
        <p className="p-1 m-4 text-2xl">Add Task</p>
        <div className="p-1 m-4">
            <label htmlFor="task-name">Title: </label>
            <input type={"text"}
                   required={true}
                   id={"task-name"}
                   value={taskName}
                   onChange={handleTaskTitleChange}
                   className="p-1 m-4"/>

            <label htmlFor="task-status">Status: </label>
            <select className="p-1 m-4"
                    id={"task-status"}
                    value={taskStatus}
                    onChange={handleTaskStatusChange}>
                <option value={0}>Pending</option>
                <option value={1}>Done</option>
            </select>
            <br/>

            <button className="p-4 m-4 text-green-500" onClick={() => {
                handleTaskAddition();
                setTaskName('');
            }}>Add Task
            </button>
        </div>
    </div>;

}