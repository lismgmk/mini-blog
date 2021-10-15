import {IPosts, PostsAction, PostsActionTypes} from "../../types/posts";

const initialState: IPosts = {
    posts: null
}

export const postsReducer = (state = initialState, action: PostsAction): IPosts => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS:
            return {...state, posts: action.payload}
        case PostsActionTypes.CREATE_POST:
            return {...state, posts: [...state.posts, action.payload]}
      case PostsActionTypes.DELETE_POST:
            return {...state, posts: state.posts.filter(i=> i.id !== action.id)}
        case PostsActionTypes.UPDATE_POST:
            return {...state, posts: state.posts.map(i=> i.id === action.id ? i = action.payload : i)}
        default:
            return state
    }
}
