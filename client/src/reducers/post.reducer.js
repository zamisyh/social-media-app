import { PostActionTypes } from "../constants/ActionTypes";

const initialState = {
    posts: null,
    loading: false,
    error: false,
    uploading: false
}

export const postReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case PostActionTypes.UPLOAD_START:
            return {...state, uploading: true, error: false, loading: true}  
        case PostActionTypes.UPLOAD_SUCCESS:
            return {...state, posts: [payload], uploading: false, error: false, loading: false}
        case PostActionTypes.UPLOAD_FAIL:
            return {...state, uploading: false, error: true}
        default:
            return state;
    }
}