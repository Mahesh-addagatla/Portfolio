import React from 'react'
import './About.css'
import prof from '../../assets/image.png'

const About = () => {
  return (
    <div className='portfolio-about' id='about'>
      <div className="about-title">
        <h1>About Me</h1>
        {/* <img src="" alt="" /> */}
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={prof} alt=""/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I'm an enthusiastic full-stack web developer, I'm passionate about crafting dynamic and interactive web experiences from front to back. With expertise in both client-side and server-side technologies, I thrive on bringing ideas to life through code.</p>
                <p>My </p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:'70%'}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:'50%'}}/></div>
                <div className="about-skill"><p>React Js</p><hr style={{width:'60%'}}/></div>
                <div className="about-skill"><p>Java</p><hr style={{width:'75%'}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achieve">
            <h1>1+</h1>
            <p>Years Of Experience</p>
        </div>
        <hr />
        <div className="about-achieve">
            <h1>20+</h1>
            <p>Projects</p>
        </div>
        <hr />
        <div className="about-achieve">
            <h1>20+</h1>
            <p>Certifications</p>
        </div>
      </div>
    </div>
  )
}

export default About
