import React from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fm4homi', 'template_1u1ijak', form.current, 'AsnDRl2N_0oson7so');
     e.target.reset();
  };
  return (
    <section id="Contact">
      <h5>Get In Touch</h5>
      <h2>With Me</h2>


      <div className="container contact__container">
        <div className="contact__options">
           <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>yashm6404@gmail.com</h5>
            <a href="mailto:yashm6404@gmail.com" >Send a message</a>
           </article>
           <article className="contact__option">
           <AiOutlineInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>ig_yoyoyash</h5>
            <a href="https://ig.me/m/ig_yoyoyash" target="_blank">Send a message</a>
           </article>
           <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91-9773681926</h5>
            <a href="https://wa.me/919773681926" target='_blank'>Send a message</a>
           </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit ={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email Address' required/>
          <textarea name="message"  rows="7" placeholder='Your Message' required/>
          <button  type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>

  )
}

export default Contact