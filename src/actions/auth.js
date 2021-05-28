import { APIUrls } from '../helpers/urls';
import {LOGIN_START} from './actionType';
import {getFormBody} from '../helpers/utils';
export function startLogin(){
    return {
        type: LOGIN_START,

    }
}
//async action requiring thunk so we'll return a function
//url encoded stringgs
//'login?email=a@a.com&password=1323'
//we need to pass it this way
export function Login(email,password){
    return(dispath)=> {
        const url=APIUrls.login;
        fetch(url,{
            method: 'POST',
            //cn api thing
            headers:{
                'Content-Type': 'application/x-ww-form-urlencoded',
            },
            body: getFormBody({email,password}),
        });

    }
}