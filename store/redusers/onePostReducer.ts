import {IOnePost, OnePostAction, PostDetailsActionTypes} from "../../types/postDetails";

const initialState: IOnePost = {
    postDetails: null
}

export const OnePostReducer = (state = initialState, action: OnePostAction): IOnePost => {
    switch (action.type) {
        case PostDetailsActionTypes.FETCH_DETAILS_POST:
            return {...state, postDetails: action.payload}
        case PostDetailsActionTypes.CREATE_COMMENT:
            return {
                ...state,
                postDetails: {...state.postDetails, comments: [...state.postDetails.comments, action.payload]}
            }
        default:
            return state
    }
}
