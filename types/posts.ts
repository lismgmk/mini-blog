export interface IPosts {
    posts: IPost[]
}

export interface IPost {
    id: number,
    title: string,
    body: string,
}

export enum PostsActionTypes {
    FETCH_POSTS = "FETCH_POSTS",
    CREATE_POST = "CREATE_POST",
    DELETE_POST = "DELETE_POST",
    UPDATE_POST = "UPDATE_POST",
}

interface FetchPostsAction {
    type: PostsActionTypes.FETCH_POSTS,
    payload: IPost[]
}

interface CreatePostAction {
    type: PostsActionTypes.CREATE_POST,
    payload: IPost
}

interface DeletePostAction {
    type: PostsActionTypes.DELETE_POST,
    id: number
}

interface UpdatePostAction {
    type: PostsActionTypes.UPDATE_POST,
    payload: IPost,
    id: number
}

export type PostsAction =
    | FetchPostsAction
    | CreatePostAction
    | DeletePostAction
    | UpdatePostAction