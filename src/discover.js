import {useState, useEffect,} from 'react';
import {Link} from 'react-router-dom'
const Discover = (props) => {
  return(
    <>
    <div className="discovergrid">
    {props.games ?
      props.games.map((game) => {
        return <div className="card" key={game._id}>
          <img src={game.image}/>
          <Link to ={`/games/${game._id}`}><div onClick={(event) => {props.handleGameDetails(game)}}>{game.title}</div></Link>
          <Link to ={`/games/edit/${game._id}`}><button className="btn" onClick={(event) => {props.handleEditLoad(game)}}>Edit</button></Link>
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
