import React, { useState } from 'react'
import {Routes, Route, BrowserRouter, useNavigate} from 'react-router-dom';
import './App.css';
import axios from 'axios'

const LoginForm = (props) => {
  let navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [toggleLogin, setToggleLogin] = useState(true)
  const [toggleError, setToggleError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [toggleLogout, setToggleLogout] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [admin, setAdmin] = useState(false)

  const triggerLogin = (event) => {
    event.preventDefault()
    console.log();
    let userObj = {
      username: username,
      password: password,
    }
    handleLogin(userObj)
  }

  const handleToggleLogout = () => {
    if(toggleLogout) {
      setToggleLogout(false)
    } else {
      setToggleLogout(true)
    }
  }

  const handleLogin = (userObj) => {
    axios.put('http://localhost:3000/login', userObj).then((response) => {
      if(response.data.username){
        setAdmin(response.data.admin);
        setToggleError(false)
        setErrorMessage('')
        setCurrentUser(response.data.username)
        handleToggleLogout()
        props.handleAdmin(response)
        navigate('/discover')

      } else {
        console.log(response);
        setToggleError(true)
        setErrorMessage(response.data)
        document.getElementById("inputForm").reset()
      }
    })
  }

  return (
    <div className="formContainer">
      <h1 className='formTitle'>Login</h1>
      <form onSubmit={triggerLogin} id='inputForm'>
        <input type='text' placeholder='username' className='textInput' onChange={(event)=> {setUsername(event.target.value)}}/>
        <input type='password' placeholder='password' className='textInput' onChange={(event)=> {setPassword(event.target.value)}}/>
        {toggleError ?
          <h5 className='errorMsg'>{errorMessage}</h5>
          :
          null
        }
        <input type='submit' value='Login' className='submitBtn'/>
      </form>
    </div>
  );
}

export default LoginForm;
