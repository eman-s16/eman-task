import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, handleTaskStatusChange }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleTaskStatusChange={handleTaskStatusChange}
        />
      ))}
    </div>
  );
};

export default TaskList;
