import { UPDATE_POSTS,ADD_POST ,ADD_COMMENT, UPDATE_POST_LIKE } from "../actions/actionType";

export default function posts (state=[],action){
    //array of posts {posts:[]}
    switch(action.type){
        case UPDATE_POSTS:
            return action.posts;
        case ADD_POST:
            return [action.post,...state];
        case ADD_COMMENT:
            const newPosts=state.map((post)=>{
                if(post._id===action.postId){
                    //post id mathes with ours need to rerender comment after appending it
                    return {
                        ...post,
                        comments: [action.comment,...post.comments],
                    }
                }
                return post;
            });
            return newPosts;
        case UPDATE_POST_LIKE:
            const likePosts=state.map((post)=>{
                if(post._id===action.postId){
                    //post id mathes with ours need to rerender comment after appending it
                    return {
                        ...post,
                        likes: [...post.likes,action.userId],
                    };
                }
                return post;
            });
            return likePosts;
        default:
            return state;
    }
}