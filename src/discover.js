import React, {useState, useEffect} from 'react';
const Discover = (props) => {
  const [gameShow, setGameShow] = useState(null)
  const gameLink = (id) => {
    return `http://localhost:3001/games/${id}`
  }

  return(
    <>
    <div className="discovergrid">
    {props.games ?
      props.games.map((game) => {
        return <div className="card" key={game._id}>
          <img src={game.image}/>
          <a href={gameLink(game._id)}>{game.title}</a>
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
