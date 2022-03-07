import React, {useState, useEffect} from 'react';
const Discover = (props) => {
  return(
    <>
    <div className="discovergrid">
    {props.games ?
      props.games.map((game) => {
        return <div className="card" key={game._id}>
          <img src={game.image}/>
          <a href="http://localhost:3001/games/:id">{game.title}</a>
        <button className="btn" onClick={(event) => {props.handleEdit(game)}}>Edit</button>
        <button className="btn" onClick={(event) => {props.handleDelete(game)}}>Delete</button>
        </div>
      })

    :
    null }
    </div>
    </>
  )
}
export default Discover;
