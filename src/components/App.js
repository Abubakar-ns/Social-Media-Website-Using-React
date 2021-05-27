import React from 'react';
import {connect} from 'react-redux';

import propTypes from 'prop-types';
import {fetchPosts} from '../actions/posts';

import { PostsList } from './';
class App extends React.Component {
  //fetch post from api
  componentDidMount() {
    //dispatch an action to fethc post which will be asynchronous
    this.props.dispatch(fetchPosts());
  }
  
  render() {
    //props contain posts(from props) and dispatch(automatically from react)
    //console.log('Props',this.props);
    const {posts} = this.props;
    return (
      <div>
        {/* navbar */}
        <nav className="nav">
          <div className="left-div">
            <img src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png" alt="logo"></img>
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
            <div className="user">
                <img
                  src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                  alt="user-dp"
                  id="user-dp"
                />
                <span>Abubakar</span>
            </div>
            <div className="nav-links">
              <ul>
                <li>Log In</li>
                <li>Log Out</li>
                <li>Register</li>
              </ul>

            </div>

          </div>
        </nav>
        {/* we passed posts as props in postlist */}
        <PostsList posts={posts} />
      </div>
    );
  }
}
function mapStatetoProps(state){
  return {
    posts: state.posts,
  }
}
App.propTypes = {
  posts: propTypes.array.isRequired,
}
//connect componetns to store
export default connect(mapStatetoProps)(App);



