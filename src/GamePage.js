import React from 'react';
const GamePage = (props) => {
  return(
  <>
  {props.games ?
    <div>
      <div className="gameinfo" key={props.games._id}>
        <h1>{props.games.title}</h1>
        <img src={props.games.image}/>
        <ul className="container">
          <li>representation: <span>{props.games.representation}</span></li>
          <li>genre: <span>{props.games.genre}</span></li>
          <li>release date: <span>{props.games.releaseDate}</span></li>
          <li>developer: <span>{props.games.developer}</span></li>
          <li>platforms: <span>{props.games.platforms}</span></li>
        </ul>
      </div>
      <div className="container">
        <p>{props.games.description}</p>
      </div>
      <div className="trailer">
        <iframe className="vid"
        src={props.games.trailer}>
        </iframe>
        </div>
    </div> : null}
  </>
)}
export default GamePage;
