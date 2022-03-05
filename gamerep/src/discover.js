import React from 'react';
const Discover = () => {
  return(
    <>
    {games.map((game) => {
      return( <div> {
        game.title
      }
      </div>
      )
    })}
    </>
  )
}
export default Discover;
