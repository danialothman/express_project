import React from "react";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          {task.name}
          <button onClick={() => deleteTask(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
