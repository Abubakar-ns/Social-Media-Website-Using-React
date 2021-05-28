import React, { Component } from 'react';

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
    //controlled components
    handleEmailChange=(e)=>{
        console.log('email',e.target.value);
        this.setState({
            email: e.target.value,
        });
    }
    handlePasswordChange=(e)=>{
        console.log('Password',e.target.value);
        this.setState({
            password: e.target.value,
        });
    } 
    //handleformsubmit uncontrolled component
    handleFormSubmit =(e)=>{
        e.preventDefault();
        // console.log('this.emailInputRef',this.emailInputRef);
        // console.log('this.passwordInputRef',this.passwordInputRef);
        console.log('state',this.state);
    }
    render() {
        return (
            <form className="login-form">
                <span className="login-signup-header">Log In</span>
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
                    <button onClick={this.handleFormSubmit}>Log In</button>
                </div>

            </form>
        );
    }
}

export default Login;