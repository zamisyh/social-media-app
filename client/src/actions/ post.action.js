import { getTimelinePostService, uploadPostService } from "../services/post.service";
import { GetTimelinePostActionTypes, PostActionTypes } from "../constants/ActionTypes"

export const uploadPostAction = (data) => async (dispatch) => {
    
    dispatch({ type: PostActionTypes.UPLOAD_START })

    try {
        const newPost = await uploadPostService("/create", data)
        dispatch({ type: PostActionTypes.UPLOAD_SUCCESS, payload: newPost.data })
    } catch (error) {
        dispatch({ type: PostActionTypes.UPLOAD_FAIL })
        console.log(error)
    }
}

export const getTimelinePostAction = (id) => async (dispatch) => {
    
    dispatch({type: GetTimelinePostActionTypes.RETREIVING_START})
    
    try {
        const data = await getTimelinePostService(id)
        dispatch({type: GetTimelinePostActionTypes.RETREIVING_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: GetTimelinePostActionTypes.RETREIVING_FAIL})
        console.log(error)
    }
}