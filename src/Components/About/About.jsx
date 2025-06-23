import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
    <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt=""  className='play-icon'   />
    </div>
    <div className="about-right">
<h3>ABOUT UNIVERSITY</h3>
<h2>Nurturing Tomorrow's Leaders Today</h2>
<p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is meticulously crafted to empower students with the knowledge, skills, and experiences essential for success in the dynamic field of education.
</p>
<p>At  we believe in fostering innovation, encouraging hands-on learning, and providing personalized mentorship. Our programs are designed to equip aspiring educators with the tools they need to thrive in classrooms, schools, and communities.
</p>
<p>
Whether your dream is to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals. We are committed to helping you unlock your full potential and make a lasting impact on the future of education.

Join us at Edusity and be a part of shaping the future of education today.
</p>


    </div>





    </div>
  )
}

export default About