import {Dispatch} from "react";
import axios from "axios";
import {IPost, PostsAction, PostsActionTypes} from "../../types/posts";
import {PostDetailsActionTypes} from "../../types/postDetails";
import {CreatePost} from "./AllActionCreaters";
import {useRouter} from "next/router";

export const fetchPosts = () => {
    return async (dispatch: Dispatch<PostsAction>) => {
        try {
            const response = await axios.get('https://simple-blog-api.crew.red/posts')
            // @ts-ignore
            dispatch({type: PostsActionTypes.FETCH_POSTS, payload: response.data})
        } catch (e) {
            // dispatch({
            //     type: TrackActionTypes.FETCH_TRACKS_ERROR,
            //     payload: 'Произошла ошибка при загрузке треков'})
        }
    }
}

// export const createPost = (data) => {
//     const router = useRouter()
//     return async (dispatch: Dispatch<PostsAction>) => {
//         try {
//             const response = await axios.post<IPost>('https://simple-blog-api.crew.red/posts/', data)
//             dispatch(CreatePost(response.data))
//                 await router.push('/')
//         } catch (e) {
//             // dispatch({
//             //     type: TrackActionTypes.FETCH_TRACKS_ERROR,
//             //     payload: 'Произошла ошибка при загрузке треков'})
//         }
//     }
// }
