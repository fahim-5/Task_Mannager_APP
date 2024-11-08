import React, { useState, useContext } from 'react';
import { TaskContext } from './TaskContext';

const AddTask = () => {
  const [taskText, setTaskText] = useState('');
  const {state, dispatch } = useContext(TaskContext);

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      dispatch({ type: 'ADD_TASK', payload: taskText });
      setTaskText('');
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask} >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
