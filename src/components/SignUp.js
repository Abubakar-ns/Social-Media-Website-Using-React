import React, { Component } from 'react';

class SignUp extends Component {
    render() {
        return (
            <form className="login-form">
                <span className="login-signup-header">Sign Up</span>
                <div className="field">
                    <input type="name" placeholder="Name" required></input>
                </div>
                <div className="field">
                    <input type="email" placeholder="Email" required></input>
                </div>
                <div className="field">
                    <input type="password" placeholder="Password" required></input>
                </div>
                <div className="field">
                    <button>Log In</button>
                </div>
            </form>
        );
    }
}

export default SignUp;