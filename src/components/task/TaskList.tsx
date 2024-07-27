import { Task } from '../../models/TaskModel';

import TaskItem from './TaskItem';

interface Props {
    items: Array<Task>;
    maxAmountToDisplay?: number;
    remove: (id: string) => void;
    updateLabel: (id: string, newLabel: string) => void;
    updateStatus: (id: string, newStatus: boolean) => void;
}

const TaskList = ({ items, remove, updateLabel, updateStatus, maxAmountToDisplay = 5 }: Props) => {
    const hiddenTasksNumber = items.length - maxAmountToDisplay;

    return (
        <ul>
            {items.filter((_, index) => index < maxAmountToDisplay).map((elem) => (
                <TaskItem
                    key={elem.id}
                    item={elem}
                    remove={remove}
                    updateLabel={updateLabel}
                    updateStatus={updateStatus}
                />
            ))}
            {hiddenTasksNumber > 0 && <li><i>({hiddenTasksNumber} hidden tasks)</i></li>}
        </ul>
    );
};

export default TaskList;