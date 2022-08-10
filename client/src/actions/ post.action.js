import { uploadPostService } from "../services/post.service";
import { PostActionTypes } from "../constants/ActionTypes"

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