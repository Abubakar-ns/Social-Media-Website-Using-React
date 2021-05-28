//exporting combine reducers method
import {combineReducers} from 'redux';
import posts from './posts';
import auth from './auth';

export default combineReducers({
    posts,
    auth
});
//our current state
//{posts:[]}
//handle auth state
//new state after adding auth 
//{posts:[],auth:{}}