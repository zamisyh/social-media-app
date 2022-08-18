import postApi from "../common/apis/postApi";

export const uploadPostService = (url, data) => {
    return postApi.post(url, data)
}

export const getTimelinePostService = (id) => {
    return postApi.get(`${id}/timeline`)
}

export const likePostService = (id, user_id) => {
    return postApi.put(`/${id}/like`, {user_id: user_id})
}