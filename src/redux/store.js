import { createStore, combineReducers, applyMiddleware} from 'redux';
import  thunk from 'redux-thunk'
import tareas from './reducers/tareas';

const reducer = combineReducers({
    tareas
});

const logger = (store) => (next) => action => {
    next(action);
}

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;