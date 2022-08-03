import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, signUp } from '../../actions/auth.action'
import './Auth.scss'

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false)
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.AUTH_REDUCER.loading)

    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        password: "",
        confirm_password: "",
        username: ""
    })
    const [confirmPassword, setConfirmPassword] = useState(true)


    const handleChange = (e) => {
        e.preventDefault()
        setData({...data, [e.target.name]: e.target.value})
    }

    const resetForm = () => {
        setConfirmPassword(true)
        setData({
            first_name: "",
            last_name: "",
            password: "",
            confirm_password: "",
            username: ""
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (isSignup) {
            if(data.password === data.confirm_password){
                dispatch(signUp(data))
            }else{
                setConfirmPassword(false)
            }
        } else {
            dispatch(logIn(data))
        }
    }



    return (
        <div className="auth">
            <div className="a-right">
                <form className="form-info form-auth" onSubmit={handleSubmit}>
                    <h3>{ isSignup ? 'Sign Up' : 'Sign In'  }</h3>
                    <div className="content">
                        {!isSignup ? (
                            <div>
                                <div className="flow" style={{ marginTop:'10px', marginBottom: '10px' }}>
                                    <input 
                                        type="text" 
                                        placeholder="Username" 
                                        name="username" 
                                        className="form-input"
                                        onChange={handleChange}

                                    />
                                </div>
                                <div className="flow">
                                    <input 
                                        type="password" 
                                        placeholder="Password" 
                                        name="password"
                                        className="form-input" 
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flow" style={{ marginTop: '15px', marginBottom: '25px' }}>
                                    <span onClick={() => {setIsSignup(true); resetForm()}}>Don't have an account ?</span>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="flow">
                                    <input 
                                        type="text" 
                                        placeholder="First Name" 
                                        name="first_name"
                                        className="form-input"
                                        onChange={handleChange}
                                    />
                                    <input 
                                        type="text" 
                                        placeholder="Last Name" 
                                        name="last_name" 
                                        className="form-input"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="flow" style={{ marginTop:'10px', marginBottom: '10px' }}>
                                    <input 
                                        type="text" 
                                        placeholder="Username" 
                                        name="username" 
                                        className="form-input"
                                        onChange={handleChange}

                                    />
                                </div>
                                <div className="flow">
                                    <input 
                                        type="password" 
                                        placeholder="Password" 
                                        name="password"
                                        className="form-input" 
                                        onChange={handleChange}
                                    />
                                    <input 
                                        type="password" 
                                        placeholder="Confirm Password" 
                                        name="confirm_password" 
                                        className="form-input"
                                        onChange={handleChange}
                                    />
                                </div>
                                <span style={{ 
                                    display: confirmPassword ? "none": "block", 
                                    color: "red", 
                                    marginTop: "5px",
                                    fontSize: "12px",    
                                }}>
                                    Confirm password is not same
                                </span>

                                <div className="flow" style={{ marginTop: '15px', marginBottom: '25px' }}>
                                    <span onClick={() => {setIsSignup(false); resetForm()}}>Already have an account ?</span>
                                </div>
                            </div>
                        )}

                        <button className="button" type="submit" disabled={loading}>
                            {loading ? "Loading..." : isSignup ? 'Sign Up' : 'Sign In' }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Auth