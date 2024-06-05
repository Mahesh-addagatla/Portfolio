import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div className='portfolio-hero' id='home'>
      <img className='hero-prof' src={profile} alt="" />
      <h1>I'm<span> Mahesh Babu Addagatla,</span> Full Stack developer based in India</h1>
      <p>I'm an enthusiastic full-stack web developer, I'm passionate about crafting dynamic and interactive web experiences from front to back. With expertise in both client-side and server-side technologies, I thrive on bringing ideas to life through code.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With me</AnchorLink></div>
        <div className='hero-resume'>My Resume</div>
      </div>
    </div>
  )
}

export default Hero
