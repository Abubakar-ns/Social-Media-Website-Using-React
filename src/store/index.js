import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers/index';
let store;
export function configureStore  () {
    //?
    //thunk middleware
    //we can pass one reducer so we combine all the reducers and pass it into this root state
    store = createStore(reducer,applyMiddleware(thunk,logger));
    return store;
} 