import { FETCH_FRIEND_SUCCESS ,ADD_FRIEND,REMOVE_FRIEND } from "../actions/actionType";

//contain array of friends
const defaultProfileState=[];

export default function friends(state = defaultProfileState,action){
    switch (action.type) {
        case FETCH_FRIEND_SUCCESS:
            return [...action.friends];
        case ADD_FRIEND:
            return state.concat(action.friend);
        case REMOVE_FRIEND:
            const newArr=state.filter(
                (friend)=>friend.to_user._id!==action.userId
            );
            return newArr;
        default:
           return state;
    }
}