import postApi from "../common/apis/postApi";

export const uploadPostService = (url, data) => {
    return postApi.post(url, data)
}

export const getTimelinePostService = (id) => {
    return postApi.get(`${id}/timeline`)
}