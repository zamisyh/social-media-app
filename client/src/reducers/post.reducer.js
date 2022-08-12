import { PostActionTypes, GetTimelinePostActionTypes } from "../constants/ActionTypes";

const initialState = { posts: null, loading: false, error: false, uploading: false }
const timelineState = { timeline: null, loading: false }

export const postReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case PostActionTypes.UPLOAD_START:
            return {...state, uploading: true, error: false, loading: true}  
        case PostActionTypes.UPLOAD_SUCCESS:
            return {...state, posts: payload, uploading: false, error: false, loading: false}
        case PostActionTypes.UPLOAD_FAIL:
            return {...state, uploading: false, error: true}
        default:
            return state;
    }
}

export const timelineReducer = (state = timelineState, {type, payload}) => {
    switch (type) {
        case GetTimelinePostActionTypes.RETREIVING_START:
            return {...state, loading: true}
        case GetTimelinePostActionTypes.RETREIVING_SUCCESS:
            return {timeline: payload.data, loading: false}
        case GetTimelinePostActionTypes.RETREIVING_FAIL:
            return {...state, loading:false,}
        default:
            return state;
    }
}