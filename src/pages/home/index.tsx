import React from 'react'
import HomeImage from '../../assets/images/home-image.svg'

function Home() {
  return (
    <div className="home">
      <h1>Family Finances</h1>
      <span className="subtitle">Start admin your finances</span>
      <div className="home-image">
        <img src={HomeImage} alt="home_image" />
      </div>
    </div>
  )
}

export default Home
