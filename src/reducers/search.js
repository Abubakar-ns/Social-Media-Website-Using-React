import { FETCH_SEARCH_RESULTS_SUCCESS } from "../actions/actionType";

const defaultSearchState={
    results:[],
};

export default function searchUsers(state = defaultSearchState,action){
    switch (action.type) {
        case FETCH_SEARCH_RESULTS_SUCCESS:
            return {
                ...state,
                results: action.users,
            }
        
        default:
           return state;
    }
}