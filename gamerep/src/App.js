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
  const [games, setGames] = useState(null)
  const [newGameFormSubmit, setNewGame] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [newImage, setNewImage] = useState('')
  const [newReleaseDate, setNewReleaseDate] = useState('')
  const [newDeveloper, setNewDeveloper] = useState('')
  const [newGenre, setNewGenre] = useState('')
  const [newRepresentation, setNewRepresentation] = useState('')
  const [newPlatforms, setNewPlatforms] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [newTrailer, setNewTrailer] = useState('')



  useEffect(() => {
    axios
        .get('http://localhost:3000/games')
        .then((response) => {
          setGames(response.data);

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


  const handleNewGame = (event) => {
    setNewGame(event.target.value)
  }
  const handleNewTitle = (event) => {
    setNewTitle(event.target.value)
    console.log(newTitle);
  }
  const handleNewImage = (event) => {
    setNewImage(event.target.value)
  }
  const handleNewReleaseDate = (event) => {
    setNewReleaseDate(event.target.value)
  }
  const handleNewDeveloper = (event) => {
    setNewDeveloper(event.target.value)
  }
  const handleNewGenre = (event) => {
    setNewGenre(event.target.value)
  }
  const handleNewRepresentation = (event) => {
    setNewRepresentation(event.target.value)
  }
  const handleNewPlatforms = (event) => {
    setNewPlatforms(event.target.value)
  }
  const handleNewDescription = (event) => {
    setNewDescription(event.target.value)
  }
  const handleNewTrailer = (event) => {
    setNewTrailer(event.target.value)
  }

  const handleNewGameFormSubmit = (event) => {
    event.preventDefault();
    axios.post(
      'http://localhost:3000/games', {
        image: newImage,
        title: newTitle,
        releaseDate: newReleaseDate,
        developer: newDeveloper,
        genre: newGenre,
        representation: newRepresentation,
        platforms: newPlatforms,
        description: newDescription,
        trailer: newTrailer
      }
    ).then(() => {
      axios
        .get('http://localhost:3000/games')
        .then((response)=>{
          setNewGame(response.data)
        })
    })
  }
  return (
    <BrowserRouter>
      {admin ? <NavbarAuth /> : <Navbar />}
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/gamepage" element={<GamePage />}/>
        <Route exact path="/request" element={<Request
          handleNewGameFormSubmit={handleNewGameFormSubmit} handleNewTitle={handleNewTitle} handleNewImage={handleNewImage} handleNewDescription={handleNewDescription}
        handleNewTrailer={handleNewTrailer} handleNewRepresentation={handleNewRepresentation}
        handleNewGenre={handleNewGenre} handleNewDeveloper={handleNewDeveloper}
        handleNewReleaseDate={handleNewReleaseDate} handleNewPlatforms={handleNewPlatforms}/>}/>
        <Route exact path="/random" element={<Random games={games}/>}/>
        <Route exact path="/login" element={<LoginForm handleToggleLogout={handleToggleLogout} toggleError={toggleError} errorMessage={errorMessage} handleAdmin={handleAdmin} />}/>
        <Route exact path="/signup" element={<SignUpForm handleCreateUser={handleCreateUser} toggleError={toggleError} errorMessage={errorMessage} />}/>
        <Route exact path="/discover" element={<Discover games={games} />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App;
