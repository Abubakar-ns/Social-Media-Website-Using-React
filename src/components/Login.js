import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router';
import {clearAuthState, LogIn} from '../actions/auth';

class Login extends Component {
    constructor(props){
        super(props);
        //ref provided by react
        //uncontroled component
        // this.emailInputRef=React.createRef();
        // this.passwordInputRef=React.createRef();

        //controlled components
        this.state={
            email: '',
            password: ''
        }
    }
    componentWillUnmount() {
        this.props.dispatch(clearAuthState());
    }
    
    //controlled components
    handleEmailChange=(e)=>{
      //  console.log('email',e.target.value);
        this.setState({
            email: e.target.value,
        });
    }
    handlePasswordChange=(e)=>{
       // console.log('Password',e.target.value);
        this.setState({
            password: e.target.value,
        });
    } 
    //handleformsubmit uncontrolled component
    handleFormSubmit =(e)=>{
        e.preventDefault();
        // console.log('this.emailInputRef',this.emailInputRef);
        // console.log('this.passwordInputRef',this.passwordInputRef);
        //console.log('state',this.state);
        //dispatch this action
        const {email,password}=this.state;
        // console.log('email' , email );
        // console.log('pass' , password)
        if(email && password){
            // since we havent conneccted this login.js component with store therefore we dont have access to props theredoent have dispatch theere fore cant dispatch this action
            this.props.dispatch(LogIn(email,password));
        }
        this.setState({
            email:'',
            password:'',
        })
    }
    render() {

        const {user,error,inProgress,isLoggedIn} =this.props.auth;
        // console.log('user login',user);
        const {from}=this.props.location.state || {from:{pathname:'/'}};
        if(isLoggedIn){
            //redirect given by react-router
            return <Redirect to={from}/>
        }
        return (
            <form method="post" action='#' className="login-form">
                <span className="login-signup-header">Log In</span>
                {error && <div className="alert-error-dialog">{error}</div>}
                <div className="field">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        //required ref={this.emailInputRef}
                        onChange={this.handleEmailChange}
                        value={this.state.email}
                        ></input>
                </div>
                <div className="field">
                    <input 
                        type="password" 
                        placeholder="Password" 
                        //required ref={this.passwordInputRef}
                        onChange={this.handlePasswordChange}
                        value={this.state.password}
                        ></input>
                </div>
                <div className="field">
                    {inProgress ?
                        <button onClick={this.handleFormSubmit} disabled={inProgress}>
                            Logging in ..
                        </button>
                        :
                        <button onClick={this.handleFormSubmit} disabled={inProgress}>
                            Log In
                        </button>
                    }
                    
                </div>

            </form>
        );
    }
}
function mapStateProps(state){
    return {
        auth:state.auth,
    };
}
export default connect(mapStateProps)(Login);