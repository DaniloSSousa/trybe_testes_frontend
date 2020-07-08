import { createStore, combineReducers } from 'redux';
import { userAccessReducer } from '../reducers';

const rootReducer = combineReducers({ userAccessReducer });

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
