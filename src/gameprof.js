import React from 'react';
const GamePage = () => {
  return(
  <>
  <div>
    <div className="gameinfo">
      <h1>Game Title</h1>
      <img src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"/>
      <ul className="container">
        <li>representation: <span>lgbtq+</span></li>
        <li>genre: <span>horror</span></li>
        <li>release date: <span>march 21, 1996</span></li>
        <li>developer: <span>riot games</span></li>
        <li>platforms: <span>one, two, three</span></li>
      </ul>
    </div>
    <div className="container">
      <p>In porttitor neque lacus, vel volutpat massa egestas eget. Phasellus ac consectetur justo, eu gravida ligula. Nullam eget tortor id lorem tempor mattis. In volutpat, orci nec mattis vestibulum, ipsum libero bibendum metus, ac varius metus ipsum nec elit. Vestibulum id accumsan nibh, at porttitor ex. Mauris est magna, dictum ac velit nec, mollis iaculis velit. Nullam ac dolor congue, porttitor nibh et, rutrum dui. Aliquam sed elit eu lacus volutpat pulvinar eu id dui. Sed ac sollicitudin augue, sed congue nibh. Ut tellus quam, ornare vel mi a, vehicula sollicitudin odio. In placerat enim in turpis finibus euismod. Donec sollicitudin in mauris vel sollicitudin. Etiam ut ipsum feugiat, congue mauris condimentum, egestas arcu. Morbi vitae libero eleifend urna ullamcorper maximus. Cras enim turpis, accumsan a arcu et, tincidunt mollis velit. Phasellus mattis orci eu aliquam hendrerit.</p>
    </div>
    <div className="trailer">
      <iframe className="vid"
      src="https://www.youtube.com/embed/ot7uXNQskhs">
      </iframe>
      </div>
    </div>
  </>
)}
export default GamePage;
