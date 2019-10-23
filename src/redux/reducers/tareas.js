import { handleActions } from 'redux-actions'
import {GETTASK, ADDTASK} from '../actions/tarea-actions'


export default handleActions({
    [GETTASK] : (state, action) =>{      
        return action.payload;
    },
    [ADDTASK]:(state, action) => {
        return [...state, action.payload];
    }
},[]);

// function reducer(state = [], action) {   
//     switch (action.type) {
//         case 'AGREGAR': {


//             id++;
//             return [...state, { id, text: action.payload.text }];
//             // 

//         }

//         case 'BORRAR': {


//             const index = state.findIndex(x => x.id === action.payload.id);
//             state.splice(index, 1);
//             return [...state];

//         }
//         case 'MODIFICAR': {


//             const element = state.find(x => x.id === action.payload.id);
//             element.completado = !element.completado;
//             return [...state];
//         }

//         default:
//             return state;
//     }
// }

// export default reducer;