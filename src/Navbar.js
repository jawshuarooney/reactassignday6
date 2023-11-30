import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function Navbar() {
  return (
    <div>
        <div className='container'>
            <ol>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'service'}>Services</Link></li>
                <li><Link to={'about'}>About Us</Link></li>
                <li><Link to={'news'}>News</Link></li>
            </ol>

        </div>
    </div>
  )
}

export default Navbar