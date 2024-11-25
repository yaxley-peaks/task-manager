import './App.css'
import {TaskAdder} from "./components/TaskAdder.jsx";
import {useEffect, useRef, useState} from "react";
import {TaskLister} from "./components/TaskLister.jsx";


function App() {
    const [tasks, setTasks] = useState([]);
    const latestTaskId = useRef(0);
    useEffect(() => {
        (async () => {
            /*
            @type {List<any>}
            */
            const fetchedTasks = await fetch("https://jsonplaceholder.typicode.com/todos")
                .then(res => res.json());
            // for now
            const tasks = fetchedTasks.slice(0,20)
            latestTaskId.current = tasks.at(-1).id;
            setTasks(tasks.reverse());
        })();
    }, []);
    const taskAdderCallback = (title, status) => {
        const newId = latestTaskId.current + 1;
        latestTaskId.current = newId;
        setTasks((tasks) => [ {id: newId, title: title, completed: status === "1"}, ...tasks]);
    }
    const taskEditCallback = (id, title) => {
        tasks.find(x => x.id === id).title = title;
    }
    return (<>
        <h1 className="text-center font-sans">Task Manager</h1>

        <TaskAdder callbackFn={taskAdderCallback}/>
        <TaskLister tasks={tasks} taskEditDispatcher={taskEditCallback}/>
    </>)
}

export default App
