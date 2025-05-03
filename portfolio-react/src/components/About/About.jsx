import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'
const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt='' />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I’m a Computer Science graduate with a deep interest in building scalable applications, exploring cloud technologies, and writing clean, maintainable code that solves real-world problems. </p>
                        <p>With a strong foundation in software development and a mindset rooted in continuous learning, I enjoy taking on complex challenges and turning ideas into impactful digital solutions.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML and CSS</p><hr style={{ width: '50%' }}></hr></div>
                           <div className="about-skill"> <p>React JS </p> <hr style={{ width: '70%' }}></hr></div>
                           <div className="about-skill"> <p>Javascript </p> <hr style={{ width: '60%' }}></hr></div>
                           <div className="about-skill"> <p>Next JS </p> <hr style={{ width: '60%' }}></hr></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>Final Year</h1>
                    <p>2025 Passout</p>
                </div>
                <hr></hr>
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr></hr>
                <div className="about-achievement">
                    <h1>300+</h1>
                    <p>Leetcode Problem Solved</p>
                </div>

            </div>
        </div>
    )
}

export default About