import React from 'react'
import './Auth.scss'

const Auth = () => {
    return (
        <div className="auth">
            <SignIn />
        </div>
    )
}

const SignIn = () => {
    return (
        <div className="a-right">
            <form className="form-info form-auth">
                <h3>Sign In</h3>
                <div className="content">
                    <div className="flow" style={{ marginTop:'10px', marginBottom: '10px' }}>
                        <input 
                            type="text" 
                            placeholder="Username" 
                            name="username" 
                            className="form-input"

                        />
                    </div>
                    <div className="flow">
                        <input 
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            className="form-input" 
                        />
                    </div>
                    <div className="flow" style={{ marginTop: '15px', marginBottom: '25px' }}>
                        <span>Don't have an account ?</span>
                    </div>

                    <button className="button" type="submit">Sign In</button>
                </div>
            </form>
        </div>
    )
}

const SignUp = () => {
    return (
        <div className="a-right">
            <form className="form-info form-auth">
                <h3>Sign Up</h3>
                <div className="content">
                   <div className="flow">
                    <input 
                            type="text" 
                            placeholder="First Name" 
                            name="FirstName"
                            className="form-input" 
                        />
                        <input 
                            type="text" 
                            placeholder="Last Name" 
                            name="LastName" 
                            className="form-input"
                        />
                   </div>

                    <div className="flow" style={{ marginTop:'10px', marginBottom: '10px' }}>
                        <input 
                            type="text" 
                            placeholder="Username" 
                            name="username" 
                            className="form-input"

                        />
                    </div>
                    <div className="flow">
                        <input 
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            className="form-input" 
                        />
                        <input 
                            type="password" 
                            placeholder="Confirm Password" 
                            name="confirm_password" 
                            className="form-input"
                        />
                    </div>
                    <div className="flow" style={{ marginTop: '15px', marginBottom: '25px' }}>
                        <span>Already have an account ?</span>
                    </div>

                    <button className="button" type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
}


export default Auth