import { Task } from '../../models/TaskModel';

import TaskList from './TaskList';

interface Props {
    items: Array<Task>;
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskContainer = ({ items, setTasks }: Props) => {
    const getNewTaskId = (index = 0) => `task_${new Date().getTime()}_${index}`;

    const addItem = (amount = 1): void => {
        const newItems: Array<Task> = [];
        for (let i = 0; i < amount; i++) {
            newItems.push({
                id: getNewTaskId(i),
                label: 'New Task',
            });
        }
        setTasks((currentList) => [...currentList, ...newItems]);
    };

    const removeItem = (amount = 1): void => {
        setTasks((currentList) => {
            const newList = [...currentList];
            newList.splice(0, amount);
            return newList;
        });
    };

    const updateItemLabel = (id: string, newLabel: string): void => {
        setTasks((currentList) => {
            const newList = [...currentList];
            const index = newList.findIndex((elem) => elem.id === id);
            if (index !== -1) {
                newList.splice(index, 1, { id: getNewTaskId(), label: newLabel });
            }
            return newList;
        });
    };

    return (
        <>
            <TaskList
                items={items}
                remove={removeItem}
                updateLabel={updateItemLabel}
            />

            <button onClick={() => addItem(1)}>Add task</button>
            <button onClick={() => addItem(5)}>Add 5 tasks</button>
        </>
    );
}

export default TaskContainer;