import {useState, useEffect,} from 'react';
import {Link} from 'react-router-dom'
const RequestsAdmin = (props) => {
  return(
    <>
    <div className="discovergrid">
    {props.requests ?
      props.requests.map((request) => {
        return <div className="card" key={request._id}>
          <form onSubmit={(event) => {props.handleAddAdmin(request)}}>
            title: <input type="text" defaultValue={request.title} onChange = {props.handleNewTitle}/><br/>
            releaseDate: <input type="text" defaultValue={request.releaseDate} onChange = {props.handleNewReleaseDate}/><br/>
            developer: <input type="text" defaultValue={request.developer} onChange = {props.handleNewDeveloper}/><br/>
            genre: <input type="text" defaultValue={request.genre} onChange = {props.handleNewGenre}/><br/>
            representation: <input type="text" defaultValue={request.representation} onChange = {props.handleNewRepresentation}/><br/>
            platforms: <input type="text" defaultValue={request.platforms} onChange = {props.handleNewPlatforms}/><br/>
            description: <input type="text" defaultValue={request.description} onChange = {props.handleNewDescription}/><br/>
            image link: <input type="text" defaultValue={request.image} onChange = {props.handleNewImage}/><br/>
            trailer link: <input type="text" defaultValue={request.trailer} onChange = {props.handleNewTrailer}/><br/>
            <button className="btn" type="submit">Add</button>
          </form>
            <button className="btn" onClick={(event) => {props.handleDeleteAdmin(request)}}>Delete</button>
        </div>
      })

    :
    null }

    </div>
    </>
  )
}
export default RequestsAdmin;
