//selectors

// actions

const createActionName = actionName => `app/posts/${actionName}`;
const DELETE_POST = createActionName('DELETE_POST');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');

export const getAllPosts = (state) => state.posts;
export const getPost = ({posts}, postId) => posts.find(post => post.id === postId);

export const deletePost = postId => ({ type: DELETE_POST, postId });
export const addPost = post => ({ type: ADD_POST, payload: post });
export const editPost = post => ({ type: EDIT_POST, payload: post });

// action creators
const postsReducer = (statePart = [], action) => {
    switch (action.type) {
        case DELETE_POST: {
            console.log(action.postId);
            return [...statePart.filter(post => post.id !== action.postId)];
        }
        case EDIT_POST: {
            return statePart.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
        }
        case ADD_POST:
            return [...statePart, action.payload];
        default:
            return statePart;
    };
};

export default postsReducer;