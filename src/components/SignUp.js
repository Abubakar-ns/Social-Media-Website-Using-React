import React from 'react';
import { connect } from 'react-redux';
import {clearAuthState, signin} from '../actions/auth';


class Register extends React.Component {
  constructor(props) {
    super(props);
    // this.emailInputRef = React.createRef();
    // this.passwordInputRef = React.createRef();
    this.state = {
      email: '',
      password: '',
      confirmedPassword: '',
      name:''
    };
  }
  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }
  
  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleConfirmPasswordChange = (e) => {
    this.setState({
      confirmedPassword: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { name ,email, password , confirmedPassword} = this.state;
    console.log('email', email);
    console.log('pass', password);
    console.log('c-pass', confirmedPassword);

    this.props.dispatch(signin(email, password , confirmedPassword ,  name));
  };

  render() {
    const {  error, inProggress} = this.props.auth;
    return (
      <form method="post" action="#" className="login-form">
         {error && <div className='alert error-dailog'>{error}</div> }
        <div className="login-signup-header">Register</div>
        <div className="field">
          
          <input 
            type="text" 
            placeholder="Name" 
            onChange={this.handleNameChange}
            required 
            value={this.state.name}
          />
        </div>
        <div className="field">

          <input 
            type="email" 
            placeholder="Email" 
            onChange={this.handleEmailChange}
            required 
            value={this.state.email}
          />
        </div>
        <div className="field">
          <input 
            type="password" 
            placeholder="Password" 
            onChange={this.handlePasswordChange}
            required 
            value={this.state.password}
          />
        </div>
        <div className="field">
          <input 
            type="password" 
            placeholder="Confirm Password" 
            onChange={this.handleConfirmPasswordChange}
            required 
            value={this.state.confirmedPassword}
          />
        </div>
        <div className="field">
        <button onClick={this.handleFormSubmit} disabled={inProggress}>{inProggress ? 'Registering....' : 'Register'}</button>        </div>
      </form>
    );
  }
}

function mapStateToProps(state){
  return {
    auth : state.auth
  }
}

const connectedSigninComponent = connect(mapStateToProps)(Register);

export default connectedSigninComponent;