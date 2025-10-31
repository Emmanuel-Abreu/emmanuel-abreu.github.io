import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner'
import About from './pages/about/About';
import ArtPiece from './components/ArtPiece';
import ArtPiece2 from './components/ArtPiece2';
import Projects from './pages/projects/Projects';
import Footer from './components/Footer';
// Components to create and import:
// Navbar
// Project "thumbnails"
// Footer
// Social icons and links
//
//
//
import './App.css'

export default function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Banner/>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/pages/about" element={<About/>}></Route>
          <Route path="/pages/projects" element={<Projects/>}></Route>
        </Routes>
      </Router>
      <ArtPiece2/>
      <Footer/>
    </div>
  );
}
