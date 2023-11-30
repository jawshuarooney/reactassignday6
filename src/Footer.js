import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{backgroundColor: "yellow"}}>
        <h3>Copyright Pokemon since 1999 - 2023</h3>
        <div className='foot'>
        <ol>
            <li><Link to={'part'}>Check out our Partners here!</Link></li>
        </ol>
        </div>
    </div>
  )
}

export default Footer