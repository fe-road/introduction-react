import { useState } from 'react';

import { Task } from '../../models/TaskModel';

import './task-item.css';

interface Props {
    item: Task;
    remove: (amount: number) => void;
    updateLabel: (id: string, newLabel: string) => void;
}

const TaskItem = ({ item, remove, updateLabel }: Props) => {
    const [label, setLabel] = useState(item.label);
    const [isEditing, setIsEditing] = useState(false);

    const startEdit = (): void => {
        setIsEditing(true);
    };

    const cancelEdit = (): void => {
        setIsEditing(false);
        setLabel(item.label);
    }

    const changeLabel = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setLabel(event.target.value);
    };

    const save = (): void => {
        updateLabel(item.id, label);
    };
    
    return (
        <li>
            {isEditing 
                ? <>
                    <div>
                        <input
                            type='text'
                            className={!label ? 'input-error' : ''}
                            value={label}
                            onChange={changeLabel}
                        />
                    </div>
                    <button 
                        disabled={!label}
                        onClick={save}
                    >
                        Save
                    </button>
                    <button onClick={cancelEdit}>Cancel</button>
                    <button onClick={() => remove(1)}>Delete</button>
                </>
                : <>
                    <p>{item.label}</p>
                    <button onClick={startEdit}>Edit</button>
                </>
            }
        </li>
    );
};

export default TaskItem;