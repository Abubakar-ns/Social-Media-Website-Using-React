import { APIUrls } from '../helpers/urls';
import {AUTHENTICATE_USER, LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS, LOG_OUT} from './actionType';
import {getFormBody} from '../helpers/utils';
export function startLogin(){
    return {
        type: LOGIN_START,

    }
}
export function loginFailed(errorMessage){
    return {
        type: LOGIN_FAILED,
        error: errorMessage,

    }
}
export function loginSuccess(user){
    return {
        type: LOGIN_SUCCESS,
        user:user,

    }
}
//async action requiring thunk so we'll return a function
//url encoded stringgs
//'login?email=a@a.com&password=1323'
//we need to pass it this way
export function LogIn(email,password){
    return(dispatch)=> {
        dispatch(startLogin());
        const url=APIUrls.login();
        fetch(url,{
            method: 'POST',
            //cn api thing
            headers:{
                'Content-Type': 'application/x-ww-form-urlencoded',
            },
            body: getFormBody({email,password}),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('data',data);
                if(data.success){
                    //dispatch action to save user
                    localStorage.setItem('token',data.data.token);
                    dispatch(loginSuccess(data.data.user));
                }
                else{
                    dispatch(loginFailed(data.message));
                }
                
            });

    }
    
}
export function authenticateUser (user){
    return {
        type: AUTHENTICATE_USER,
        user,
    };
}
export function logoutUser (){
    return {
        type: LOG_OUT,
    };
}
