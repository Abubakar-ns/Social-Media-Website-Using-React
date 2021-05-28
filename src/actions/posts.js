import { APIUrls } from "../helpers/urls";
import { UPDATE_POSTS } from "./actionType";

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