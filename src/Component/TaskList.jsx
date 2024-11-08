import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';
;

const TaskList = () => {
  const { state, dispatch } = useContext(TaskContext);

  const handleToggleTask = (taskId) => {
    dispatch({ type: 'TOGGLE_TASK', payload: taskId });
  };

  const handleRemoveTask = (taskId) => {
    dispatch({ type: 'REMOVE_TASK', payload: taskId });
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {state.tasks.map((task) => (
          <li key={task.id} >
            {task.text}
            <button onClick={() => handleToggleTask(task.id)} >
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleRemoveTask(task.id)} >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
