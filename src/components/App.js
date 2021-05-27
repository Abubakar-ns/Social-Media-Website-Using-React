import React from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import propTypes from 'prop-types';
import {fetchPosts} from '../actions/posts';
import { Home,Navbar,Page404,LogIn,SignUp } from './';
//dummy components
const login = () =>(
  <div>Login</div>
)
const signup = () =>(
  <div>SignUp</div>
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
            <Switch>
            {/* react passes some props with component */}
            {/* here posts are not passed as props so in home postlist is not rendering */}
            {/* <Route exact path="/" component={Home}/> */}
            {/* to solve this we have another prop in route called render which needs callback and there we can send required prrops */}
            <Route 
              exact 
              path="/" 
              render={(props) =>{
                // by not passing props we only get posts as props but now we pass every prop like location history with destrucuting
                return <Home {...props} posts={posts}/>
            }}/>
            <Route path="/login" component={LogIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route component={Page404}/>
            {/* we need navbar same in every page */}
            {/* so in this way navbar will be same in everyone */}
            </Switch>
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



