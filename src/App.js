import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskAdd = (title, dueDate) => {
    const newTask = {
      id: Date.now(),
      title,
      dueDate,
      completed: false
    };

    setTasks([...tasks, newTask]);
  };

  const handleTaskStatusChange = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1 className="myName">Task Management App</h1>
      <TaskForm handleTaskAdd={handleTaskAdd} />
      <TaskList tasks={tasks} handleTaskStatusChange={handleTaskStatusChange} />
      <footer className="footer">
        <p className="myName">Created by Eman</p>
      </footer>
    </div>
  );
};

export default App;
