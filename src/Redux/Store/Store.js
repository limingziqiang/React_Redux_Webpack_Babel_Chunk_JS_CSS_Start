import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import * as reducer from '../Reducer/Index';
import thunk from 'redux-thunk';


//创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

var store = createStore(
    combineReducers(reducer),
    composeEnhancers(
        applyMiddleware(thunk)
        // other store enhancers if any
    )
);

export default store;