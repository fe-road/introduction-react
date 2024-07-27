import { Task } from '../../models/TaskModel';

import TaskList from './TaskList';

interface Props {
  items: Array<Task>;
  hideAddButtons?: boolean;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskContainer = ({ items, hideAddButtons = false, setTasks }: Props) => {
  const getNewTaskId = (index = 0) => `task_${new Date().getTime()}_${index}`;

  const addItem = (amount = 1): void => {
    const newItems: Array<Task> = [];
    for (let i = 0; i < amount; i++) {
      newItems.push({
        id: getNewTaskId(i),
        label: 'New Task',
        completed: false,
      });
    }
    setTasks((currentList) => [...currentList, ...newItems]);
  };

  const removeItem = (id: string): void => {
    setTasks((currentList) => {
      return currentList.filter((elem) => elem.id !== id);
    });
  };

  const updateItemLabel = (id: string, newLabel: string): void => {
    setTasks((currentList) => {
      const newList = [...currentList];
      const index = newList.findIndex((elem) => elem.id === id);
      if (index !== -1) {
        const newItem = {
          id: getNewTaskId(),
          label: newLabel,
          completed: newList[index].completed,
        };
        newList.splice(index, 1, newItem);
      }
      return newList;
    });
  };

  const updateItemStatus = (id: string, newStatus: boolean): void => {
    setTasks((currentList) => {
      const newList = [...currentList];
      const index = newList.findIndex((elem) => elem.id === id);
      if (index !== -1) {
        const newItem = {
          id: getNewTaskId(),
          label: newList[index].label,
          completed: newStatus,
        };
        newList.splice(index, 1, newItem);
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
        updateStatus={updateItemStatus}
      />

      {hideAddButtons ? null : (
        <>
          <button className="button" onClick={() => addItem(1)}>
            Add task
          </button>
          <button className="button" onClick={() => addItem(5)}>
            Add 5 tasks
          </button>
        </>
      )}
    </>
  );
};

export default TaskContainer;
