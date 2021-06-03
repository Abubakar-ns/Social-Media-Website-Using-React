import { FETCH_FRIEND_SUCCESS } from "../actions/actionType";

//contain array of friends
const defaultProfileState=[];

export default function friends(state = defaultProfileState,action){
    switch (action.type) {
        case FETCH_FRIEND_SUCCESS:
            return [...action.friends];
        default:
           return state;
    }
}