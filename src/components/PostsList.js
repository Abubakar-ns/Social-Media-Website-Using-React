import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {CreatePost} from './';
import Post from './Post';
class PostsList extends Component {
  render() {
    const { posts } = this.props;
    // console.log('posts first',posts);
    return (
      <div className="posts-list">
        <CreatePost/>
        
        {posts.map((post) => (
          <Post post={post} key={post._id}/>
        ))}
      </div>
    );
  }
}

//prop-types
PostsList.propTypes={
  //types of props this postlist component can have here array
  posts: propTypes.array.isRequired,
}
export default PostsList;
