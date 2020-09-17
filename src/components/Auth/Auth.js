import React, { useState } from 'react'

import Login from './Login'
import Register from './Register'

import './Auth.css'

function Auth() {

    const [auth, setAuth] = useState("LOGIN")
    const changeToLogin = () => setAuth("LOGIN");
    const changeToSignup = () => setAuth("SIGNUP");

    return (
        <div className="auth-page__container">
            {auth === 'LOGIN' ? <Login setAuth={changeToSignup} /> :
                <Register setAuth={changeToLogin} />
            }
        </div>
    )
}

export default Auth
