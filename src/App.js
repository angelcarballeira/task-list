import './App.css';
import { Logo } from './components/Logo.js';
import { TaskList } from './components/TaskList.js';

function App() {
  return (
    <div className='task-app'>
      <Logo />

      <div className='task-main-list'>
        <h1>Mis Tareas</h1>
        <TaskList />
        {/* <Task text='Aprender React' /> */}
      </div>
    </div>
  );
}

export default App;
