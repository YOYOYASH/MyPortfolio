import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>YASH</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Projects">Projects</a></li> 
        <li><a href="#Contact">Contact</a></li>
      </ul>


      <div className="footer__socials">
        <a href="https://www.facebook.com/yash.mishra.566790" target='_blank'><BsFacebook/></a>
        <a href="https://twitter.com/Yash2Mishra" target='_blank'><BsTwitter/></a>
        <a href="https://www.instagram.com/ig_yoyoyash/" target='_blank'><AiOutlineInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Yash's Portfolio. All Rights Reserved. </small>
      </div>
    </footer>
  )
}

export default Footer