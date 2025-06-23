import React from 'react'
import './Hero.css'
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div  className='hero container'>
<div className="hero-text">
    <h1>WE Ensure better education for a better World</h1>
    <p>Our pioneering syllabus is crafted to empower students with the expertise, abilities, and encounters requisite to thrive in the ever-evolving realm of education.</p>
    <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
</div>


    </div>
  )
}

export default Hero