import './App.css'
import {TaskAdder} from "./components/TaskAdder.jsx";
import {useEffect, useState} from "react";
import {TaskLister} from "./components/TaskLister.jsx";


function App() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        (async () => {
            /*
            @type {List<any>}
            */
            const fetchedTasks = await fetch("https://jsonplaceholder.typicode.com/todos")
                .then(res => res.json());
            // for now
            setTasks(fetchedTasks.slice(0, 20));
        })();
    }, []);
    const taskAdderCallback = (title, status) => {
        setTasks((tasks) => [ {title: title, completed: status}, ...tasks]);
    }
    return (<>
        <h1 className="text-center font-sans">Task Manager</h1>

        <TaskAdder callbackFn={taskAdderCallback}/>
        <TaskLister tasks={tasks}/>
    </>)
}

export default App
