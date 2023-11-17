import React, { useState } from 'react';
import { Task } from './Task';

import { TaskForm } from './TaskForm';

import '../styles/TaskList.css';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();

      const updatedTasks = [task, ...tasks];

      setTasks(updatedTasks);
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.complete = !task.complete;
      }

      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className='task-list-container'>
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            complete={task.complete}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </>
  );
}

export { TaskList };
