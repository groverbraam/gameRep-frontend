import React, {useState, useEffect} from 'react';
import axios from 'axios'
import App from './App.js'
const Edit = (props) => {
  return(
  <>
  <div className="requestform">
    <h1>Edit a game</h1>
      <form onSubmit={props.handleEdit}>
        title: <input type="text" value={props.games.title} onChange={props.handleNewTitle}/><br/>
        releaseDate: <input type="text" value={props.games.releaseDate} onChange={props.handleNewReleaseDate}/><br/>
        developer: <input type="text" value={props.games.developer} onChange={props.handleNewDeveloper}/><br/>
        genre: <input type="text" value={props.games.genre} onChange={props.handleNewGenre}/><br/>
        representation: <input type="text" value={props.games.representation} onChange={props.handleNewRepresentation}/><br/>
        platforms: <input type="text" value={props.games.platforms} onChange={props.handleNewPlatforms}/><br/>
        description: <input type="text" value={props.games.description} onChange={props.handleNewDescription}/><br/>
        image link: <input type="text" value={props.games.image} onChange={props.handleNewImage}/><br/>
        trailer link: <input type="text" value={props.games.trailer} onChange={props.handleNewTrailer}/><br/>
        <button className="btn" type="submit">Request Game</button>
      </form>
      {console.log(props.games.title)}
    </div>
  </>
)
}
export default Edit;
