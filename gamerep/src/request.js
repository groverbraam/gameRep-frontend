import React from 'react';
const Request = () => {
  return(
  <>
  <div className="requestform">
    <h1>Suggest a game</h1>
    <p>Know of a game with great representation that isn't on our site? Request that we add it here:</p>
      <form>
        title: <input type="text"/><br/>
        releaseDate: <input type="text"/><br/>
        developer: <input type="text"/><br/>
        genre: <input type="text"/><br/>
        representation: <input type="text"/><br/>
        platforms: <input type="text"/><br/>
        description: <input type="text"/><br/>
        image link: <input type="text"/><br/>
        <input className="btn" type="submit" value="Request Game"/>
      </form>
    </div>
  </>
)
}
export default Request;
