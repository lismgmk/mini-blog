
export interface IOnePost {
    postDetails: IPostDetails | null
}

export interface IPostDetails {
    IPost,
    comments?: IComments[]
}

export interface IComments {
    id: number,
    postId: number,
    body: string
}

export enum PostDetailsActionTypes {
    FETCH_DETAILS_POST = "FETCH_DETAILS_POST",
    CREATE_COMMENT = "CREATE_COMMENT"
}

interface FetchDetailsPostAction {
    type: PostDetailsActionTypes.FETCH_DETAILS_POST,
    payload: IPostDetails
}

interface CreateCommentAction {
    type: PostDetailsActionTypes.CREATE_COMMENT,
    payload: IComments
}

export type OnePostAction =
    | FetchDetailsPostAction
    | CreateCommentAction