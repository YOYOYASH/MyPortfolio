import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {MdOutlineConnectWithoutContact} from 'react-icons/md'
import './nav.css'
import { useState } from 'react'

function Nav() {
 const [activeNav,setactiveNav]= useState("#");
  return (
  <nav>
    <a href="#" onClick={() => setactiveNav('#')} className = {activeNav==='#'?'active':' '}><AiOutlineHome/></a>
    <a href="#About" onClick={()=> setactiveNav('#About')}  className={activeNav === '#About'?'active':' '}><AiOutlineUser/></a>
    <a href="#Projects" onClick={()=> setactiveNav('#Projects')}  className={activeNav === '#Projects'?'active':' '}><BiBook/></a>
    <a href="#Contact" onClick={()=> setactiveNav('#Contact')}  className={activeNav === '#Contact'?'active':' '}><MdOutlineConnectWithoutContact/></a>  
  </nav>
  ) 
}

export default Nav