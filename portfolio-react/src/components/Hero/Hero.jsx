import React from 'react'
import "./Hero.css"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
  return (
    <div id='home' className='hero'>
    <img src={profile_img} alt=''/>
    <h1><span>I'm Jagath Vishwa K,</span> Full Stack Developer</h1>
    <p>Passionate and enthusiastic CSE student driven by continuous learning and growth. Self-motivated and
    adaptable, excelling in both independent work and collaborative projects.</p>
    <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href='#contact'>
            Connect with me</AnchorLink>
        </div>
        <a href='/Jagath_Resume.pdf' className="hero-resume" target="_blank" rel="noopener noreferrer">My Resume</a>
        </div>
    </div>
  )
}

export default Hero