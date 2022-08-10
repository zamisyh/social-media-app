import uploadApi from "../common/apis/uploadApi"

export const uploadImageService = (url, data) => {
    return uploadApi.post(url, data)
}