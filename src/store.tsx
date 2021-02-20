import {createStore} from 'redux';
import reducer from './reducers/todo-reducer';

const store = createStore(reducer);

export default store;