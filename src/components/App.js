import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/posts';
class App extends React.Component {
  //fetch post from api
  componentDidMount() {
    //dispatch an action to fethc post which will be asynchronous
    this.props.dispatch(fetchPosts());
  }
  
  render() {
    //props contain posts and dispatch(automatically from react)
    console.log('Props',this.props);
    return (
      <div>
        App
      </div>
    );
  }
}
function mapStatetoProps(state){
  return {
    posts: state.posts,
  }
}
//connect componetns to store
export default connect(mapStatetoProps)(App);



