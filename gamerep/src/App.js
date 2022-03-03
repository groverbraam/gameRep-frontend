import React, {useState} from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import './App.css'
import Home from './home.js'
import Navbar from './components/navbar.js'
import Footer from './components/footer.js'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App;
