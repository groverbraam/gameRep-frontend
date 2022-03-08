import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import App from './App.js'
const Edit = (props) => {
  console.log(props.games);
  return(
  <>
  <div className="requestform">
    <h1>Edit a game</h1>
    <a href="/discover">Back to Discover</a>
      <form onSubmit={props.handleEdit}>
        title: <input type="text" defaultValue={props.games.title} onChange={props.handleNewTitle}/><br/>
        releaseDate: <input type="text" defaultValue={props.games.releaseDate} onChange={props.handleNewReleaseDate}/><br/>
        developer: <input type="text" defaultValue={props.games.developer} onChange={props.handleNewDeveloper}/><br/>
        genre: <input type="text" defaultValue={props.games.genre} onChange={props.handleNewGenre}/><br/>
        representation: <input type="text" defaultValue={props.games.representation} onChange={props.handleNewRepresentation}/><br/>
        platforms: <input type="text" defaultValue={props.games.platforms} onChange={props.handleNewPlatforms}/><br/>
        description: <input type="text" defaultValue={props.games.description} onChange={props.handleNewDescription}/><br/>
        image link: <input type="text" defaultValue={props.games.image} onChange={props.handleNewImage}/><br/>
        trailer link: <input type="text" defaultValue={props.games.trailer} onChange={props.handleNewTrailer}/><br/>
        <button className="btn" type="submit"><a href="/discover">Edit Game</a></button>
      </form>
      {console.log(props.games)}
    </div>
  </>
)
}
export default Edit;
