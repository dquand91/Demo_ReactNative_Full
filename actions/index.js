/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Redux in React Native - Action Creators
*/
import { ADD_NEW_TASK_123, TOGGLE_ONE_TASK_123 } from './actionTypes';
let newTaskId = 0;

//Khởi tạo Action tương ứng với cái action Type ADD_NEW_TASK_123
export const addNewAction123 = (inputTaskName) => {
    return {
        // action Phải có cái type này mới chạy được
        type: ADD_NEW_TASK_123,
        taskId: newTaskId++, // mỗi lần bấm Add, id sẽ tăng lên 1
        taskName: inputTaskName
    }
}
//Khởi tạo Action tương ứng với cái action Type TOGGLE_ONE_TASK_123
export const toggleAction123 = (taskId) => {
    return {
        type: TOGGLE_ONE_TASK_123,
        taskId: taskId
    }
}