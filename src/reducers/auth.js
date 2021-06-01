import { 
     LOGIN_FAILED, 
     LOGIN_START, 
     LOGIN_SUCCESS, 
     SIGNUP_START, 
     SIGNUP_SUCCESS,
     SIGNUP_FAILED,
     } from "../actions/actionType";

const intitalAuthState = {
    user:{},
    error: null,
    isLoggedIn: false,
    inProgress: false,
}
export default function auth(state = intitalAuthState,action){
    switch(action.type){
        case LOGIN_START:
        case SIGNUP_START:
            return {
                //state
                ...state,
                inProgress: true,
            };
        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            return {
                //state
                ...state,
                user: action.user,
                isLoggedIn: true,
                inProgress: false,
                error: null,
            };
        case LOGIN_FAILED:
        case SIGNUP_FAILED:
            return {
                //state
                ...state,
                inProgress: false,
                error: action.error,
            };
        // case AUTHENTICATE_USER:
        //     return {
        //         ...state,
        //         user: action.user,
        //         isLoggedIn: true,
        //     }
        // case LOG_OUT:
        //     return{
        //         ...state,
        //         //remove the user
        //         user:{},
        //         isLoggedIn: false,
        //     }
        default:
            return state;
    }
}