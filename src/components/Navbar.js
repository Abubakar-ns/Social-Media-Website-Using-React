import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { logoutUser } from '../actions/auth';

class Navbar extends Component {
  LogOut=()=>{
    //console.log(localStorage.token);
    localStorage.removeItem('token');
    this.props.dispatch(logoutUser());
  }
    render() {
      const {auth} = this.props;
        return (
            <nav className="nav">
          <div className="left-div">
            <Link to="/">
              <img src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png" alt="logo"></img>
            </Link>
            
          </div>
          <div className="search-container">
            <img className="search-icon" src="https://image.flaticon.com/icons/svg/483/483356.svg" alt="search-icon"/>
            <input placeholder="Search"/>
            <div className="search-results">
              <ul>
                <li className="search-results-row">
                <img
                  src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                  alt="user-dp"
                />
                <span>John Doe</span>
                </li>
                <li className="search-results-row">
                <img
                  src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                  alt="user-dp"
                />
                <span>John Doe</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-nav">
          {auth.isLoggedIn && <div className="user">
             
             <img
               src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
               alt="user-dp"
               id="user-dp"
             />
             <span>{auth.user.name}</span>
         </div>}
            
            <div className="nav-links">
              <ul>
                {!auth.isLoggedIn && 
                  <li>
                    <Link to="/login">Log In</Link>
                  </li> 
                }
                {auth.isLoggedIn && 
                  <li onClick={this.LogOut}>
                    Log Out
                  </li>
                }
                 {!auth.isLoggedIn && 
                  <li>
                    <Link to="/signup">SignUp</Link>
                  </li>
                }
              </ul>

            </div>

          </div>
        </nav>
        );
    }
}
function mapStatetoProps(state){
  return {
    auth: state.auth,
  }
}
export default connect(mapStatetoProps)(Navbar);