import React, {useState, useEffect} from 'react';
import axios from 'axios'
import App from './App.js'
const Request = (props) => {
  return(
  <>
  <div className="requestform">
    <h1>Suggest a game</h1>
    <p>Know of a game with great representation that isn't on our site? Request that we add it here:</p>
      <form onSubmit={props.handleNewGameFormSubmit}>
        title: <input type="text" onChange={props.handleNewTitle}/><br/>
        releaseDate: <input type="text" onChange={props.handleNewReleaseDate}/><br/>
        developer: <input type="text" onChange={props.handleNewDeveloper}/><br/>
        genre: <input type="text" onChange={props.handleNewGenre}/><br/>
        representation: <input type="text" onChange={props.handleNewRepresentation}/><br/>
        platforms: <input type="text" onChange={props.handleNewPlatforms}/><br/>
        description: <input type="text" onChange={props.handleNewDescription}/><br/>
        image link: <input type="text" onChange={props.handleNewImage}/><br/>
        trailer link: <input type="text" onChange={props.handleNewTrailer}/><br/>
        <button className="btn" type="submit">Request Game</button>
      </form>
    </div>
  </>
)
}
export default Request;
