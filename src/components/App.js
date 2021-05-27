import React from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router,Link,Route} from 'react-router-dom';
import propTypes from 'prop-types';
import {fetchPosts} from '../actions/posts';
import { PostsList,Navbar } from './';
//dummy components
const login = () =>(
  <div>Login</div>
)
const signup = () =>(
  <div>SignUp</div>
)
const home = () =>(
  <div>Home</div>
)
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
      <Router>
          <div>
            {/* navbar */}
            <Navbar/>
            {/* we passed posts as props in postlist */}
            {/* <PostsList posts={posts} /> */}
            {/* routes */}
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
            <Route exact path="/" component={home}/>
            <Route exact path="/login" component={login}/>
            <Route exact path="/signup" component={signup}/>
            {/* we need navbar same in every page */}
            {/* so in this way navbar will be same in everyone */}
          </div>
      </Router>
      
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



