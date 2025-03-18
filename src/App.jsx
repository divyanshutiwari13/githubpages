import { useState } from "react";
import "./App.css";

function App() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const addTask = () => {
        if (task.trim() === "") return;
        setTasks([...tasks, task]);
        setTask("");
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="container">
            <h1>To-Do List</h1>
            <div className="todo-input">
                <input 
                    type="text" 
                    placeholder="Add a new task..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button onClick={addTask}>Add</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button className="delete-btn" onClick={() => removeTask(index)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
