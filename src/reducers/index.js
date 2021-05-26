//exporting combine reducers method
import {combineReducers} from 'redux';
import posts from './posts';

export default combineReducers({
    posts,
})