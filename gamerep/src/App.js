import React, {useState, useEffect} from 'react';
import {Routes, Route, BrowserRouter, useNavigate} from 'react-router-dom';
import './App.css'
import Home from './home'
import Navbar from './components/navbar'
import NavbarAuth from './components/navbarAuth'
import Footer from './components/footer'
import LoginForm from './loginform'
import SignUpForm from './signupform'
import Discover from './discover'
import GamePage from './gameprof'
import Request from './request'
import Random from './random'
import axios from 'axios'


const App = () => {

  const [toggleLogin, setToggleLogin] = useState(true)
  const [toggleError, setToggleError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [toggleLogout, setToggleLogout] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [admin, setAdmin] = useState(false)
  const [game, setGame] = useState([])

  useEffect(() => {
    axios
        .get('http://localhost:3001/games')
        .then((response) => {
          setGame(response.data);
          console.log(response);
        })
  }, [])

  const handleCreateUser = (userObj) => {
    axios.post('http://localhost:3000/signup', userObj).then((response) => {
      if(response.data.username){
        console.log(response);
        setToggleError(false)
        setErrorMessage('')
        setCurrentUser(response.data)
        handleToggleLogout()
      } else {
        setErrorMessage(response.data)
        setToggleError(true)
      }
    })
  }

  const handleAdmin = (response) => {
    setAdmin(response.data.admin);
  }

  const handleLogout = () => {
    setCurrentUser({})
    setAdmin(false)
    handleToggleLogout()
  }

  const handleToggleForm = () => {
    setToggleError(false)
    if(toggleLogin === true) {
      setToggleLogin(false)
    } else {
      setToggleLogin(true)
    }
  }

  const handleToggleLogout = () => {
    if(toggleLogout) {
      setToggleLogout(false)
    } else {
      setToggleLogout(true)
    }
  }

  return (
    <BrowserRouter>
      {admin ? <NavbarAuth /> : <Navbar />}
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/gamepage" element={<GamePage />}/>
        <Route exact path="/request" element={<Request />}/>
        <Route exact path="/random" element={<Random />}/>
        <Route exact path="/login" element={<LoginForm handleToggleLogout={handleToggleLogout} toggleError={toggleError} errorMessage={errorMessage} handleAdmin={handleAdmin} />}/>
        <Route exact path="/signup" element={<SignUpForm handleCreateUser={handleCreateUser} toggleError={toggleError} errorMessage={errorMessage} />}/>
        <Route exact path="/discover" element={<Discover admin={admin} />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App;
