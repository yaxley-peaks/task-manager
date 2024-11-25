export function TaskAdder() {
    return <div className="text-center font-sans border-2 m-4">
        <p className="p-1 m-4 text-2xl">Add Task</p>
        <div className="p-1 m-4">
            <label htmlFor="task-name">Title: </label>
            <input type={"text"} id={"task-name"} className="p-1 m-4"/>
            <label htmlFor="task-status">Status: </label>
            <select className="p-1 m-4" id={"task-status"}>
                <option selected={true}>Pending</option>
                <option>Done</option>
                <option>Junk</option>
            </select>
            <br/>
            <button className="p-4 m-4">Add Task</button>
        </div>
    </div>;

}