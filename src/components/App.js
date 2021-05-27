import React from 'react';
import {connect} from 'react-redux';
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
//connect componetns to store
export default connect(mapStatetoProps)(App);



