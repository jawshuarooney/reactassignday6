import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Services from './Services'
import Aboutus from './Aboutus'
import Partners from './Partners'
import News from './News'

function App() {
  return (
    // must be in div to write html
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='service' element={<Services/>}/>
          <Route path='about' element={<Aboutus/>}/>
          <Route path='part' element={<Partners/>}/>
          <Route path='news' element={<News/>}/>
        </Routes>

        <Footer />
      </Router>
    </div>

  )
}

export default App