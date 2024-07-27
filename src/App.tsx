import { useState } from 'react';

import { Task } from './models/TaskModel';

import Header from './components/header/Header.tsx';
import Card from './components/card/Card.tsx';
import TaskContainer from './components/task/TaskContainer.tsx';

import './App.css';

const App = () => {
    const [tasks, setTasks] = useState<Array<Task>>([]);

    return (
        <>
            {tasks.length > 0 && <Header text='Task List' />}
            <Card title={tasks.length ? `Remaining Tasks: ${tasks.length}` : 'No tasks! Good job!'}>
                <TaskContainer 
                    items={tasks}
                    setTasks={setTasks}
                />
            </Card>
        </>
    )
}

export default App;
