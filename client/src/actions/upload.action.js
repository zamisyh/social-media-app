import { uploadImageService } from "../services/upload.service"

export const uploadImageAction = (data) => async (dispatch) => {
    try {
        await uploadImageService("/uploads", data)
    } catch (error) {
        console.log(error)
    }
}
