import { APIUrls } from '../helpers/urls';
import {
         LOGIN_FAILED, 
         LOGIN_START, 
         LOGIN_SUCCESS, 
         SIGNUP_START,
         SIGNUP_FAILED,
         SIGNUP_SUCCESS,


        } from './actionType';
import {getFormbody} from '../helpers/utils';

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
    return function(dispatch){
        dispatch(startLogin());
        const url=APIUrls.login();
        
        fetch(url,{
            method: 'post',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: getFormbody({
              email:email,
              password: password,
            }),
            
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
export function signin(email, password , confirm_password ,  name) {
    return function (dispatch) {
      dispatch(startSignin()); //we are doing this to set the inprogress state prop of auth while we check tteh auth
      const url = APIUrls.signup();
      fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: getFormbody({
            email : email,
            password:password,
            confirm_password:confirm_password,
            name:name
        }
        ), //this will send us a url encoded string with email and  pasword
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.success) {
            //save user
            localStorage.setItem('token'  , data.data.token);
            dispatch(signinSuccess(data.data.user))
            return;
          } else {
            dispatch(signinFailed(data.message));
          }
        }).catch((err)=>{
            console.log(err);
        });
    };
  }
  


export function startSignin() {
    return {
      type: SIGNUP_START,
    };
  }
  
  export function signinFailed(errorMessage) {
    return {
      type: SIGNUP_FAILED,
      error: errorMessage,
    };
  }
  
  export function signinSuccess(user) {
    return {
      type: SIGNUP_SUCCESS,
      user: user,
    };
  }