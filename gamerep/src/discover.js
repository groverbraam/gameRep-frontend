import React, {useState, useEffect} from 'react';
const Discover = (props) => {
  return(
    <>
    {props.games ?
      props.games.map((game) => {
        return <div> {
          game.title
        }
        </div>
      })
    :
    null }
    </>
  )
}
export default Discover;
