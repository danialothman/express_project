import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";

// const API_URL = "http://localhost:5000";
const API_URL = "http://192.168.68.112:5000";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await axios.get(API_URL + "/tasks");
      setTasks(res.data);
    };
    fetchTasks();
  }, []);

  const addTask = async () => {
    const res = await axios.post(API_URL + "/tasks", {
      name: taskName,
    });
    setTasks([...tasks, res.data]);
    setTaskName("");
  };

  const deleteTask = async (id) => {
    await axios.delete(API_URL + `/tasks/${id}`);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add</button>
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
