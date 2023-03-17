import React from 'react'
import ME from '../../Assets/myimage.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {ImUserTie} from 'react-icons/im'
import './About.css'


function About() {
  return (
    <section id="About">
      <h5>Let Me Introduce</h5>
      <h2>Myself</h2>

      <div className="container about__container">
        <div className="about__me"> 
          <div className="about__myimage">
            <img src={ME} alt="My Image" />
          </div>
          </div>
         <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Expereince</h5>
              <small>Fresher looking for opportunities</small>
            </article>
            <article className="about__card">
              <ImUserTie className='about__icon'/>
              <h5>Current Role</h5>
              <small>Consultant in Genpact</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ projects completed.</small>
            </article>

          </div>
          <p>
            Hello Amigos! i'm Yash Mishra, graduate from NIT Warangal in 2022 and currently working as a consultant in Genpact. I'm skilled in Data Structures, Algorithms, JavaScript,JAVA and have worked in Selenium,React,SQl and dotnet technologies. I'm a team player and have a keen interest in learning different technologies. Feel free to connect with me anytime.
          </p>

          <a href="#Contact" className="btn btn-primary">Let's Talk</a>
         </div>
        
      </div>
    </section>
  )
}

export default About