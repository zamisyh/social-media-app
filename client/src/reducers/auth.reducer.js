import { AuthActionTypes } from "../constants/ActionTypes";

const initialState = {
    auth: [],
    loading: false,
    error: false
}

export const authReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case AuthActionTypes.AUTH_START:
            return {...state, loading: true, error: false}
        case AuthActionTypes.AUTH_SUCCESS:
            localStorage.removeItem("profile")
            localStorage.setItem("profile", JSON.stringify({...payload}))
            return {...state, auth: payload, loading: false, error: false} 
        case AuthActionTypes.AUTH_FAIL:
            return {...state, loading: false, error: true}
        default:
            return state;
    }
}