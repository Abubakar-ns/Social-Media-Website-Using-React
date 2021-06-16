import { APIUrls } from "../helpers/urls";
import {getAuthTokenFromLocalStorage} from "../helpers/utils";
import { FETCH_FRIEND_SUCCESS,ADD_FRIEND, REMOVE_FRIEND } from "./actionType";

export function fetchFriendSuccess(friends){
    return {
        type: FETCH_FRIEND_SUCCESS,
        friends,
    }
}
export function addFriend(friend){
    return {
        type: ADD_FRIEND,
        friend,
    }
}
export function removeFriend(userId){
    return {
        type: REMOVE_FRIEND,
        userId,
    }
}
export function fetchUserFriends(userId){
    return(dispatch)=>{
        const url=APIUrls.userFriends(userId);
        fetch(url,{
            //method: 'GET',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': `Bearer ${getAuthTokenFromLocalStorage()}`
            },
        })
        .then((response)=>response.json())
        .then((data) =>{
            console.log(' friends data',data.data.friends);
            dispatch(fetchFriendSuccess(data.data.friends));
        })
    }
}
