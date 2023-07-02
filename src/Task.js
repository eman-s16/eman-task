import React from 'react';

const Task = ({ task, handleTaskStatusChange }) => {
  const { id, title, dueDate, completed } = task;

  const handleCheckboxChange = () => {
    handleTaskStatusChange(id);
  };

  return (
    <div className="task">
      <input
        type="checkbox"
        checked={completed}
        onChange={handleCheckboxChange}
      />
      <div className="task-details">
        <h3>{title}</h3>
        <p>Due: {dueDate}</p>
      </div>
    </div>
  );
};

export default Task;
