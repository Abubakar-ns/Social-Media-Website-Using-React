//exporting combine reducers method
import {combineReducers} from 'redux';
import posts from './posts';
import auth from './auth';
import profile from './profile';
import friends from './friends';
export default combineReducers({
    posts,
    auth,
    profile,
    friends
});
//our current state
//{posts:[]}
//handle auth state
//new state after adding auth 
//{posts:[],auth:{}}