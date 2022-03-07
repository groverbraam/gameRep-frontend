import React from 'react';
const GamePage = (props) => {
  return(
  <>
  {props.games ?
    <div>
      <div className="gameinfo" key={props.games._id}>
        <h1>{props.games[0].title}</h1>
        <img src={props.games[0].image}/>
        <ul className="container">
          <li>representation: <span>{props.games[0].representation}</span></li>
          <li>genre: <span>{props.games[0].genre}</span></li>
          <li>release date: <span>{props.games[0].releaseDate}</span></li>
          <li>developer: <span>{props.games[0].developer}</span></li>
          <li>platforms: <span>{props.games[0].platforms}</span></li>
        </ul>
      </div>
      <div className="container">
        <p>{props.games[0].description}</p>
      </div>
      <div className="trailer">
        <iframe className="vid"
        src={props.games[0].trailer}>
        </iframe>
        </div>
    </div> : null}
    {console.log(props.games)}
  </>
)}
export default GamePage;
