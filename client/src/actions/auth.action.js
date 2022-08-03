import { AuthActionTypes } from "../constants/ActionTypes"
import { loginService, registerService } from "../services/auth.service"

export const logIn = (formData) => async (dispatch) => {

    dispatch({ type: AuthActionTypes.AUTH_START })

    try {
        const { data } = await loginService('/login', formData)
        dispatch({ 
            type: AuthActionTypes.AUTH_SUCCESS,
            payload: data
         })
    } catch (error) {
        console.log(error)
        dispatch({type: AuthActionTypes.AUTH_FAIL})
    }
}

export const signUp = (formData) => async (dispatch) => {
    
    dispatch({ type: AuthActionTypes.AUTH_START })

    try {
        const { data } = await registerService('/register', formData)
        dispatch({ 
            type: AuthActionTypes.AUTH_SUCCESS,
            payload: data
         })
    } catch (error) {
        console.log(error)
        dispatch({type: AuthActionTypes.AUTH_FAIL})
    }

}