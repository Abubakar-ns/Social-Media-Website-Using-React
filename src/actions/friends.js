import { APIUrls } from "../helpers/urls"
import { FETCH_FRIEND_SUCCESS } from "./actionType";
import {getAuthTokenFromLocalStorage} from "../helpers/utils"

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
            console.log('data',data);
            dispatch(fetchFriendSuccess(data.data.friends));
        })
    }
}
export function fetchFriendSuccess(friends){
    return {
        type: FETCH_FRIEND_SUCCESS,
        friends,
    }
}