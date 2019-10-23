import { createAction } from 'redux-actions'
import api from '../../services/api';


export const GETTASK = 'GETTASK';
export const ADDTASK = 'ADDTASK';

export const getTaskSuccess = createAction(GETTASK);

export const getTask = () => async (dispatch) => {
    const resp = await api.get();
    console.log(resp);
    dispatch(getTaskSuccess(resp))
} 


export const addTaskSuccess = createAction(ADDTASK);

export const addNewTask = nombre => async (dispatch) => {
    const resp = await api.insert(nombre);
    console.log(resp);
    dispatch(addTaskSuccess(resp));
}


// export const type = 'AGREGAR';

// const addTask = tast =>{
//     return {
//         type,
//         payload: tast
//     }
// }

// export default addTask;

