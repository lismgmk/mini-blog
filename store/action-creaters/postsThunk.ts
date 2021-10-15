import {Dispatch} from "react";
import axios from "axios";
import {PostsAction, PostsActionTypes} from "../../types/posts";

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
