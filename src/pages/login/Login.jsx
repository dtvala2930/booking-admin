import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from "axios";
import "./login.scss"
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    })
    const {user , loading ,error, dispatch } = useContext(AuthContext)
    
    const navigate = useNavigate()
    
    const handleChange = (e) => {
        setCredentials(prev => ({...prev, [e.target.id]: e.target.value}))
    }

    const handleClick = async e => {
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try {
            const res = await axios.post("api/auth/login", credentials)
            if(res.data.isAdmin){
              dispatch({type:"LOGIN_SUCCESS", payload: res.data.details})
              navigate("/")
            }else{
              dispatch({type:"LOGIN_FAILURE", payload: {message: "You are not an administrator"}})
            }
        } catch (error) {
            dispatch({type:"LOGIN_FAILURE", payload: error.response.data})
        }
    }
    console.log(error);

    return (
    <div className='login'>
        <div className="lContainer">
            <input type="text" placeholder='username' id='username' onChange={handleChange} className="lInput" />
            <input type="password" placeholder='username' id='password' onChange={handleChange} className="lInput" />
            <button disabled={loading} onClick={handleClick} className="lButton">Login</button>
            {error && <span>{error.stack.split("!")[0]}</span>}
        </div>
    </div>
  )
}

export default Login