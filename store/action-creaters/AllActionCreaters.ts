import {IPost, IPosts, PostsAction, PostsActionTypes} from "../../types/posts";
import {IComments, IPostDetails, OnePostAction, PostDetailsActionTypes} from "../../types/postDetails";


export const FetchPosts = (payload: IPost[]): PostsAction => {
    return {type: PostsActionTypes.FETCH_POSTS, payload}
}

export const FetchDetailsPost = (payload: IPostDetails): OnePostAction => {
    return {type: PostDetailsActionTypes.FETCH_DETAILS_POST, payload}
}

export const CreateComment = (payload: IComments): OnePostAction => {
    return {type: PostDetailsActionTypes.CREATE_COMMENT, payload}
}

export const CreatePost = (payload: IPost): PostsAction => {
    return {type: PostsActionTypes.CREATE_POST, payload}
}

export const DeletePost = (id: number): PostsAction => {
    return {type: PostsActionTypes.DELETE_POST, id}
}

export const UpdatePost = (id: number, payload: IPost): PostsAction => {
    return {type: PostsActionTypes.UPDATE_POST, id, payload}
}

export type ActionCreators =
| typeof FetchDetailsPost
| typeof CreateComment
| typeof CreatePost
| typeof DeletePost
| typeof UpdatePost


