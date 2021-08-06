import { Button } from '@material-ui/core'
import React from 'react'
import { login } from './features/userSlice'
import { auth,provider } from './firebase'
import logo from "./gmail_logo.png"
import "./Login.css"
import { useDispatch } from 'react-redux';
function Login() {
    const  dispatch = useDispatch()
    const signin=()=>{
        auth.signInWithPopup(provider)
        .then(({user})=>{dispatch(login({
                displayName:user.displayName,
                email:user.email,
                photoUrl:user.photoURL,
        }))
        })
        .catch((error)=>console.log(error))
    };
    return (
        <div className="login">
            <div className="login__container">
                <img src={logo} alt="" />
                <Button variant="contained" color="primary" onClick={signin}>LOGIN</Button>
            </div>
        </div>
       
    )
}

export default Login
