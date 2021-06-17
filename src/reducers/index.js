//exporting combine reducers method
import {combineReducers} from 'redux';
import posts from './posts';
import auth from './auth';
import profile from './profile';
import friends from './friends';
import searchUsers from './search';
export default combineReducers({
    posts,
    auth,
    profile,
    friends,
    searchUsers,
});
//our current state
//{posts:[]}
//handle auth state
//new state after adding auth 
//{posts:[],auth:{}}