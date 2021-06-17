import { APIUrls } from "../helpers/urls";
import { UPDATE_POSTS ,ADD_POST,ADD_COMMENT, UPDATE_POST_LIKE } from "./actionType";
import {getAuthTokenFromLocalStorage,getFormbody} from "../helpers/utils";
export function fetchPosts() {
    //thunk will handle this
    return (dispatch) => {
      const url = APIUrls.fetchPosts();
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          //console.log('data',data.data.posts);
          //important dispatches the posts from data
          dispatch(updatePosts(data.data.posts));
        });
    };
  }
//simple action creater
export function updatePosts(posts){
    return {
        type: UPDATE_POSTS,
        posts
    }
}
export function addPost(post){
  return {
      type: ADD_POST,
      post
  }
}
export function createPost(content){
  return (dispatch)=>{
    const url=APIUrls.createPost();
    fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${getAuthTokenFromLocalStorage()}`
      },
      body: getFormbody({
          content:content
      }), 
    })
      .then(response=>response.json())
      .then(data=>{
        // console.log('Post Data',data);
        if(data.success){
          dispatch(addPost(data.data.post));
        }
      });
  };
}
export function createComment(content, postId) {
  return (dispatch) => {
    const url = APIUrls.createComment();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
      body: getFormbody({ 
        content:content, 
        post_id: postId
       }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(addComment(data.data.comment, postId));
        }
      });
  };
}

export function addComment(comment, postId) {
  return {
    type: ADD_COMMENT,
    comment,
    postId,
  };
}
export function addLikeOnPost(id,LikeType,userId) {
  return (dispatch) => {
    const url = APIUrls.toggleLike(id,LikeType);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('like data',data);
        if (data.success) {
          dispatch(addLiketoStore(id,userId));
        }
       
      });
  };
}
export function addLiketoStore(postId,userId){
  return {
    type: UPDATE_POST_LIKE,
    postId,
    userId,
  }
}
