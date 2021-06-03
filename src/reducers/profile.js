import { FETCH_USER_PROFILE, USER_PROFILE_FAIL, USER_PROFILE_SUCCESS} from "../actions/actionType";
const initialProfileState={
    user:{},
    error:null,
    success:null,
    inProgress:false,
}
export default function profile (state=initialProfileState,action){
    //array of posts {posts:[]}
    switch(action.type){
        case USER_PROFILE_SUCCESS:
            return {
                ...state,
                success: true,
                user: action.user,
                inProgress: false,

            }
        case USER_PROFILE_FAIL:
            return{
                ...state,
                error: action.error,
                inProgress: false,
            }
        case FETCH_USER_PROFILE:
            return{
                ...state,
                inProgress:true,
            }
        default:
            return state;
    }
}