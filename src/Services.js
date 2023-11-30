import React from 'react'

function Services() {
  return (
    <div>
        <h1>Our Services</h1> 
        <div className='serv'>
        <h2>Entertainment</h2>
        <img src='happy.jpg' style={{width:"30%", margin:"15px auto", height:"10%", display: "flex", justifyContent: "center"}}/>
        <h2>Ease of Access</h2>
        <img src='easy.png' style={{width:"30%", margin:"15px auto", height:"10%", display: "flex", justifyContent: "center"}}/>
        <h2>Informative content</h2>
        <img src='info.jpg' style={{width:"30%", margin:"15px auto", height:"10%", display: "flex", justifyContent: "center"}}/>
        </div>
    </div>
  )
}

export default Services