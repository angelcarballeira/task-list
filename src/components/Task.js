import React from 'react';
import '../styles/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Task({ id, text, complete, completeTask, deleteTask }) {
  return (
    <div className={complete ? 'task-container completed' : 'task-container'}>
      <div className='task-text' onClick={() => completeTask(id)}>
        {text}
      </div>
      <div className='task-icons-container' onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className='task-icon' />
      </div>
    </div>
  );
}

export { Task };
