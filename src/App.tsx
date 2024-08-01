import { useState } from 'react';

import { Task } from './models/TaskModel';

import Header from './components/header/Header.tsx';
import Card from './components/card/Card.tsx';
import TaskContainer from './components/task/TaskContainer.tsx';

import './App.css';

const App = () => {
    
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const remainingTasks = tasks.filter((elem) => !elem.completed);
  const completedTasks = tasks.filter((elem) => elem.completed);

  return (
    <div className="py-2 px-4 bg-slate-100 h-screen dark:bg-slate-100">
      <Header text="Task List" />
      <Card
        title={
          remainingTasks.length
            ? `Remaining Tasks: ${remainingTasks.length}`
            : 'No tasks! Good job!'
        }
      >
        <TaskContainer items={remainingTasks} setTasks={setTasks} />
      </Card>
      {completedTasks.length > 0 && (
        <Card
          title={
            completedTasks.length
              ? `Completed Tasks: ${completedTasks.length}`
              : ''
          }
        >
          <TaskContainer
            hideAddButtons
            items={completedTasks}
            setTasks={setTasks}
          />
        </Card>
      )}
    </div>
  );
};

export default App;
