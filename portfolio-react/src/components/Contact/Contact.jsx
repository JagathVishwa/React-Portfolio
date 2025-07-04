import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "3c16b422-5b44-4597-a0b3-fa37ff4bfe93");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
      };

  return (
    <div id='contact'className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently open to job and internship opportunities in Backend and Fullstack Development. I'm also interested in working on exciting, meaningful projects—feel free to reach out anytime!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <p>jagathvishwa08@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>
                            +91 8220811628
                        </p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" />
                        <p>Adambakkam,Chennai</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor='name'>Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' required/>
                <label htmlFor='email'>Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' required/>
                <label htmlFor='message'> Write your message here</label>
                <textarea type="message" rows ='8' placeholder='Enter your message' required></textarea>
                <button type='submit' className='contact-submit'>Submit now</button>

            </form>

        </div>
    </div>
  )
}

export default Contact