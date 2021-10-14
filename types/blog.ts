export type IBlog = { name: string, id: number, comments?: Array<string> }

export interface IPosts {
    posts: IPost[],
}

export interface IPost {
    id: number,
    title: string,
    body: string,
    // comments?: IComments[]
}

// export interface IComments {
//     id: number,
//     postId: number,
//     body: string
// }

export enum PostsActionTypes {
    FETCH_POSTS = "FETCH_POSTS",
    // FETCH_DETAILS_POST = "FETCH_DETAILS_POST",
    CREATE_POST = "CREATE_POST",
    DELETE_POST = "DELETE_POST",
    UPDATE_POST = "UPDATE_POST",
    // CREATE_COMMENT = "CREATE_COMMENT"
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
    id: string
}
interface UpdatePostAction {
    type: PostsActionTypes.UPDATE_POST,
    payload: IPost,
    id: string
}