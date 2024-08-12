import React, { useState } from 'react'
import './ContactUs.css'
import emailjs from '@emailjs/browser'

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const sendEmail = (e) => {
    e.preventDefault()
  
    emailjs
      .sendForm('service_xzm4c0t', 'template_n68y8od', e.target, 'QWAGeav2tfrzX9QQZ')
      .then(
        () => {
          console.log('SUCCESS!')
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
  }

  return (
    <div className='contactus'>
      <div className='head'>
        <h2>Contact Us</h2>
        <h4>WE'd ❤️ to help!</h4>
        <p>We like to make your lifestyle a healthier one. Feel free to say hello!!</p>
      </div>
      <div className='contact'>
        <div className='contact-left'>
          <p>We will provide you 24/7 support for your queries</p>
          <p>Email: swigz@gmail.com</p>
          <p>Phone: +91 9384930490</p>
          <p>Address: 523-3,Bushido Towers 2nd Floor, Udayampalayam Main Rd, KR Puram, Coimbatore, Tamil Nadu 641028</p>
        </div>
        <div className='contact-right'>
          <form className='contact-form' onSubmit={sendEmail}>
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name='message'
              placeholder='Your Message'
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}