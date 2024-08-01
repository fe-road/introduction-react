import { useState } from 'react';

import { Task } from '../../models/TaskModel';

// import './task-item.css';
import './task-item.scss';

interface Props {
  item: Task;
  remove: (id: string) => void;
  updateLabel: (id: string, newLabel: string) => void;
  updateStatus: (id: string, newStatus: boolean) => void;
}

const TaskItem = ({ item, remove, updateLabel, updateStatus }: Props) => {
  const [label, setLabel] = useState(item.label);
  const [isEditing, setIsEditing] = useState(false);

  const startEdit = (): void => {
    setIsEditing(true);
  };

  const cancelEdit = (): void => {
    setIsEditing(false);
    setLabel(item.label);
  };

  const changeLabel = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLabel(event.target.value);
  };

  const save = (): void => {
    updateLabel(item.id, label);
  };

  return (
    <li className='task-item'>
      {isEditing ? (
        <>
          <div>
            <input
              type="text"
              className={`task-input-label ${!label ? 'input-error' : 'input-info'}`}
              value={label}
              onChange={changeLabel}
            />
          </div>
          <button
            className="button button--small button--icon"
            disabled={!label}
            onClick={save}
          >
            <span className="fa-solid fa-check"></span>
          </button>
          <button className="button button--small button--icon" onClick={cancelEdit}>
            <span className="fa-solid fa-xmark"></span>
          </button>
          <button className="button button--small button--icon" onClick={() => remove(item.id)}>
            <span className="fa-solid fa-trash"></span>
          </button>
        </>
      ) : (
        <>
          <p className="task-label">{item.label}</p>
          <button className="button button--small button--icon" onClick={startEdit}>
            <span className="fa-solid fa-pencil"></span>
          </button>
          <button
            className="button button--small button--icon"
            onClick={() => updateStatus(item.id, !item.completed)}
          >
            <span
              className={`fa-solid ${item.completed ? 'fa-delete-left' : 'fa-check'}`}
            ></span>
          </button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
