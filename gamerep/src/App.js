import React, {useState} from 'react';
import './App.css'

const App = () => {
  return (
    <>
    <div>
      <div className="header">
        <h1>GameRep</h1>
        <div className="navlink"><a href="/">Home</a></div>
        <div className="navlink"><a href="/">Discover</a></div>
        <div className="navlink"><a href="/">Random Game</a></div>
        <div className="navlink"><a href="/">Request Game</a></div>
      </div>
      <div className="container">
      <h2> why representation matters..</h2>
        <p>
        in Dracula Unleashed, Alfred Horner is a gay man who co-owns a bookstore. This was the first time a gay character in a computer game was given a speaking role. This game came out in 1993.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus erat nec magna bibendum semper. Phasellus venenatis, dolor eget aliquam tempus, tellus ex aliquam massa, non aliquam quam lectus sit amet turpis. Cras diam massa, rhoncus vitae commodo non, rutrum ac ex. Duis vestibulum eleifend tortor id malesuada. Fusce suscipit augue eget luctus mollis. Ut quis viverra risus. Cras purus risus, ullamcorper vehicula dapibus at, elementum at quam. Fusce id felis non est lobortis elementum.</p>

        <p>Mauris neque purus, fermentum ac condimentum nec, gravida non mi. Curabitur ut dui viverra neque pellentesque egestas. Morbi lobortis, nisl et pulvinar dapibus, arcu ex tincidunt elit, vitae vehicula mauris magna sit amet orci. Proin pharetra eu lorem sed congue. Nulla ac ante sed mauris scelerisque luctus nec eget eros. Donec lorem nisi, tempor nec velit quis, pulvinar elementum arcu. Pellentesque ultrices lacus urna, non mattis nisi gravida non. Cras tincidunt elit nec suscipit viverra. Nullam ornare, ex a imperdiet scelerisque, dui ligula auctor arcu, nec lacinia dui libero a lectus.</p>
      </div>
      <div className="faves">
        <h2>developer's favorite representation</h2>
          <div className="grid">
            <img src="https://www.acendas.com/wp-content/uploads/2015/01/200x200-white-placeholder.png"/>
            <img src="https://www.acendas.com/wp-content/uploads/2015/01/200x200-white-placeholder.png"/>
            <img src="https://www.acendas.com/wp-content/uploads/2015/01/200x200-white-placeholder.png"/>
            <img src="https://www.acendas.com/wp-content/uploads/2015/01/200x200-white-placeholder.png"/>
            <img src="https://www.acendas.com/wp-content/uploads/2015/01/200x200-white-placeholder.png"/>
            <img src="https://www.acendas.com/wp-content/uploads/2015/01/200x200-white-placeholder.png"/>
            <img src="https://www.acendas.com/wp-content/uploads/2015/01/200x200-white-placeholder.png"/>
            <img src="https://www.acendas.com/wp-content/uploads/2015/01/200x200-white-placeholder.png"/>
          </div>
      </div>
    </div>
    </>
  )
}
export default App
