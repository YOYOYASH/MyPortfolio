import React from "react";
import './Projects.css'
import img1 from '../../Assets/img1.png'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.png'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.png'
import img6 from '../../Assets/img6.png'


const projects=[
{
  id:1,
  image:img1,
  title:'NewsAdda:News On Your Fingertips',
  github:'https://github.com/YOYOYASH/NewsAdda.git'
  },
  {
  id:1,
  image:img2,
  title:'File Management System',
  github:'https://github.com/YOYOYASH/FileManagementSystem.git'
  },
  {
  id:1,
  image:img3,
  title:'My Personal Portoflio',
  github:'https://github.com/YOYOYASH/MyPortfolio.git'
  },
  {
  id:1,
  image:img4,
  title:'FakeKart:The Shopping Site',
  github:'https://github.com/YOYOYASH/FakeKart.git'
  },
  {
  id:1,
  image:img5,
  title:'ChatBuddies: Chat With Your Friends',
  github:'https://github.com/YOYOYASH/ChatBuddies.git'
  },
  {
  id:1,
  image:img6,
  title:'Budget Tracker:Your Savings and Expenses',
  github:'https://github.com/YOYOYASH/Budget-Tracker.git'
  }
]

function Projects() {
  return (
    <section id="Projects">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container project__container">
       {
        projects.map(({id,image,title,github}) =>{
          return(
            
                <article className="project__items">
              <div className="project__image">
                <img src={image} alt="" /> 
              </div>
              <h3>{title}</h3>
             <a href={github} className="btn"  target= "_blank">Github</a>
              
            </article>
            
          )
        })
       }
      </div>
    </section>
  );
}

export default Projects;
