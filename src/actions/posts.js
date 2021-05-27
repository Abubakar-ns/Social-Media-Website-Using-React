import { UPDATE_POSTS } from "./actionType";

export function fetchPosts() {
    //thunk will handle this
    return (dispatch) => {
      const url = 'http://codeial.codingninjas.com:8000/api/v2/posts?page=1&limit=5';
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