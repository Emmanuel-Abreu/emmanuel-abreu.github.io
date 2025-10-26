import { useState } from 'react'
// Components to create and import:
// Navbar
// Project "thumbnails"
// Footer
// Social icons and links
//
//
//



import './App.css'
//import Navbar from './components/Navbar'
//import About from './components/About'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/pages/About" element={<About/>}></Route>
        <Route path="/pages/Artwork" element={<Artwork/>}></Route>
        <Route path="pages/" element={<Home/>}></Route>
      </Router>
    </div>
  )
}

export default App
