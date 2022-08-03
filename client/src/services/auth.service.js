import authApi from "../common/apis/authApi";

const config = {
    headers: {
        "Content-Type": "application/json"
    }
}

export const loginService = (url, data) => {
    return authApi.post(url, data, config)
}

export const registerService = (url, data) => {
    return authApi.post(url, data, config)
}