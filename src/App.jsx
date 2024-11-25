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
            const tasks = fetchedTasks.slice(0, 2)
            latestTaskId.current = tasks.at(-1).id;
            setTasks(tasks.reverse());
        })();
    }, []);
    const taskAdderCallback = (title, status) => {
        const newId = latestTaskId.current + 1;
        latestTaskId.current = newId;
        setTasks((tasks) => [{id: newId, title: title, completed: status === "1"}, ...tasks]);
    }
    const taskEditCallback = (id, title) => {
        tasks.find(x => x.id === id).title = title;
        let t = tasks.slice();
        t.at(t.findIndex(x => x.id === id)).title = title;
        setTasks(t);
    }
    const taskDeleteCallback = (id) => {
        setTasks(tasks.filter(x => x.id !== id))
    }
    const taskDoneCallback = (id, isDone) => {
        let t = tasks.slice();
        t.at(t.findIndex(x => x.id === id)).completed = isDone;
        console.log(t);
        setTasks(t);
    }
    return (<>
        <h1 className="text-center font-sans">Task Manager</h1>

        <TaskAdder callbackFn={taskAdderCallback}/>
        <TaskLister tasks={tasks}
                    taskEditDispatcher={taskEditCallback}
                    taskDeleteDispatcher={taskDeleteCallback}
                    taskDoneDispatcher={taskDoneCallback}/>
    </>)
}

export default App
