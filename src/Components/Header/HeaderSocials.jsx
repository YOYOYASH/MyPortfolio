import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'


function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/yash-mishra-074630169/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/YOYOYASH" target="_blank"><BsGithub/></a>
        <a href="https://leetcode.com/mishrayash930/" target="_blank"><SiLeetcode/></a>
    </div>
  )
}

export default HeaderSocials