//exporting combine reducers method
import {combineReducers} from 'redux';
import posts from './posts';

export default combineReducers({
    posts,
});
//our current state
//{posts:[]}
//handle auth state
//new state after adding auth 
//{posts:[],auth:{}}