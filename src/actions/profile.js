import { APIUrls } from "../helpers/urls";
import { FETCH_USER_PROFILE, USER_PROFILE_FAIL, USER_PROFILE_SUCCESS } from "./actionType";
import {getAuthTokenFromLocalStorage} from '../helpers/utils';
export function userProfileSuccess(user){
    return {
        type: USER_PROFILE_SUCCESS,
        user,
    }
}
export function userProfileFail(error){
    return {
        type: USER_PROFILE_FAIL,
        error,
    }
}
export function fetchUserProfileStart(){
    return {
        type: FETCH_USER_PROFILE,
    }
}
//asynchronous
export function fetchUserProfile(userId){
    return (dispatch)=>{
        dispatch(fetchUserProfileStart());
        const url=APIUrls.userProfile(userId);
        console.log('url search',url);
        fetch(url,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': `Bearer ${getAuthTokenFromLocalStorage()}`
            },
        })
        .then(response =>response.json())
        .then(data=>{
            console.log('data user profile',data);
            dispatch(userProfileSuccess(data.data.user));
        })
    }
}