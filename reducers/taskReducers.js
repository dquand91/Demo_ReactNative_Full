import { ADD_NEW_TASK_123, TOGGLE_ONE_TASK_123 } from '../actions/actionTypes';

const taskReducers = (tasks = [], action) => {
    switch (action.type) {
        case ADD_NEW_TASK_123:
            return [
                ...tasks,
                {
                    taskId: action.taskId,
                    taskName: action.taskName,
                    completed: false
                }
            ]
        case TOGGLE_ONE_TASK_123:
        return tasks.map(task =>
            (task.taskId === action.taskId) 
              ? {...task, completed: !task.completed}
              : task
          )
            
        default:
            return tasks; //state does not change
    }
}

export default taskReducers;